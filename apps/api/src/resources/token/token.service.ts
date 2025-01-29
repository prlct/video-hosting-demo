import { ClientSession } from '@paralect/node-mongo';

import { securityUtil } from 'utils';


import { DATABASE_DOCUMENTS } from 'app-constants';
import { tokenSchema } from 'schemas';
import { TokenType } from 'types';

import { tokens as Token } from 'models/tokens'; // Sequelize model

// type TokenPayload = Pick<Token, 'userId' | 'isShadow'> & { tokenType: TokenType };

// const service = db.createService<Token>(DATABASE_DOCUMENTS.TOKENS, {
//   schemaValidator: (obj) => tokenSchema.parseAsync(obj),
// });

const createToken = async (userId: string, type: any, isShadow?: boolean) => {
  const payload: any = {
    tokenType: type,
    userId,
    isShadow: isShadow || null,
  };

  const value = await securityUtil.generateJwtToken<any>(payload);

  console.log('value', value)

  const token = await Token.create({
    type: 'ACCESS',
    value,
    user_id: userId,
    is_shadow: Boolean(isShadow),
    created_at: new Date(),
  });

  return token.dataValues
};

const createAuthTokens = async ({ userId, isShadow }: { userId: string; isShadow?: boolean }) => {
  const accessTokenEntity = await createToken(userId, TokenType.ACCESS, isShadow);

  console.log('accessTokenEntity', accessTokenEntity)

  console.log('accessTokenEntity.value', accessTokenEntity.value)

  return {
    accessToken: accessTokenEntity.value,
  };
};

const findTokenByValue = async (token?: string | null): Promise<Token | null> => {
  if (!token) return null;

  const tokenPayload = await securityUtil.verifyJwtToken<any>(token);

  console.log('tokenPayload', tokenPayload)
  console.log('token', token)

  if (!tokenPayload) return null;

  return Token.findOne({ where: { value: token } });
};

const removeAuthTokens = async (accessToken: string) => Token.destroy({ where: { value: accessToken } });

// const invalidateUserTokens = async (userId: string, session?: ClientSession) =>
//   Token.destroy({ userId }, {}, { session });

export default Object.assign({
  createAuthTokens,
  findTokenByValue,
  removeAuthTokens,
  // invalidateUserTokens,
});
