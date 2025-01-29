import { Pagination } from '@mantine/core';

import classes from './index.module.css';

export default Pagination.extend({
  classNames: () => ({
    root: classes.root,
    control: classes.control,
  }),
});
