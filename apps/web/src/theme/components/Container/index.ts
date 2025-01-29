import { Container } from '@mantine/core';

import classes from './index.module.css';

export default Container.extend({
  classNames: () => ({
    root: classes.root,
  }),
});
