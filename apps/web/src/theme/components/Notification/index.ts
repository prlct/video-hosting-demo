import { Notification } from '@mantine/core';

import classes from './index.module.css';

export default Notification.extend({
  classNames: () => ({
    root: classes.root,
    title: classes.title,
    description: classes.description,
    icon: classes.icon,
    closeButton: classes.closeButton,
  }),
});
