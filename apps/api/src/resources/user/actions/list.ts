import { z } from 'zod';
import { Op, WhereOptions } from 'sequelize';
import userService from 'resources/user/user.service';
import { users as User } from 'models/user'; // Sequelize model

import { validateMiddleware } from 'middlewares';
import { stringUtil } from 'utils';
import { paginationSchema } from 'schemas';
import { AppKoaContext, AppRouter } from 'types';

// We extend our pagination schema with "filter" and "sort" rules
const schema = paginationSchema.extend({
  filter: z
    .object({
      createdOn: z
        .object({
          startDate: z.coerce.date().optional(),
          endDate: z.coerce.date().optional(),
        })
        .optional(),
    })
    .optional(),
  sort: z
    .object({
      firstName: z.enum(['asc', 'desc']).optional(),
      lastName: z.enum(['asc', 'desc']).optional(),
      createdOn: z.enum(['asc', 'desc']).default('asc'),
    })
    .default({}),
});

type ValidatedData = z.infer<typeof schema>;

async function handler(ctx: AppKoaContext<ValidatedData>) {
  const { perPage, page, sort, searchValue, filter } = ctx.validatedData;

  const where: WhereOptions = {};

  if (searchValue) {
    const searchPattern = `%${stringUtil.escapeRegExpString(searchValue)}%`;

    // In Mongo, you did `$or: [ { firstName: /search/ }, ... ]`.
    // In Sequelize, we do { [Op.or]: [{ firstName: { [Op.iLike]: ... } }, ...] }
    where[Op.or as keyof WhereOptions] = [
      { first_name: { [Op.iLike]: searchPattern } },
      { last_name: { [Op.iLike]: searchPattern } },
      { email: { [Op.iLike]: searchPattern } },
    ];
  }

  // 2) Additional filters (e.g., dates)
  if (filter) {
    const { createdOn, ...otherFilters } = filter;

    // Date range filter
    if (createdOn) {
      const { startDate, endDate } = createdOn;

      // Suppose your DB column is `created_at`
      where.created_at = {
        ...(startDate && { [Op.gte]: startDate }),
        ...(endDate && { [Op.lt]: endDate }),
      };
    }

    Object.entries(otherFilters).forEach(([key, value]) => {
      // e.g., { blocked: true }
      where[key] = value as any; 
    });
  }

  const limit = perPage;
  const offset = (page - 1) * perPage;

  const result = await User.findAndCountAll({ where, limit, offset });


  ctx.body = {
    totalCount: result.count,
    page,
    perPage,
    results: result.rows.map(userService.getPublic),
  };
}

export default (router: AppRouter) => {
  router.get('/', validateMiddleware(schema), handler);
};
