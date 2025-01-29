import { Container } from '@mantine/core';
import cx from 'clsx';

import classes from './index.module.css';

export default Container.extend({
  classNames: (_) => ({
    root: classes.root,
  }),
});
