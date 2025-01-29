import { Button } from '@mantine/core';

import classes from './index.module.css';

export default Button.extend({
  defaultProps: {
    size: 'md',
    color: 'violet.0',
  },
  classNames: {
    label: classes.label,
    root: classes.root,
    section: classes.section,
  },
  vars: (_, props) => {
    switch (props.size) {
      case 'md':
        return {
          root: {
            '--button-height': '44px',
            '--button-padding-x': '24px',
            '--button-fz': '15px',
          },
        };

      case 'sm':
        return {
          root: {
            '--button-height': '38px',
            '--button-padding-x': '22px',
            '--button-fz': '14px',
          },
        };

      default:
        return { root: {} };
    }
  },
});
