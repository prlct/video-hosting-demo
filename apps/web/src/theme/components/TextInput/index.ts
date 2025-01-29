import { MantineSize, TextInput } from '@mantine/core';
import cx from 'clsx';

import classes from './index.module.css';

const errorFontSizeMap = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export default TextInput.extend({
  defaultProps: {
    size: 'sm',
  },
  classNames: (_, props) => ({
    input: cx(classes.input, {
      [classes.inputError]: props.error,
    }),
    label: cx(classes.label, {
      [classes.error]: props.error,
    }),
    error: classes.error,
    required: classes.required,
  }),
  vars: (_, props) => ({
    error: { fontSize: errorFontSizeMap[(props.size as MantineSize) || 'md'] },
  }),
});
