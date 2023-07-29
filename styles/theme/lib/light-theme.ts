import { DefaultTheme } from 'styled-components';

import { Color } from '../theme.types';

const lightTheme: DefaultTheme = {
  colors: {
    transparent: 'rgba(0,0,0,0)',
    divider: Color.greyD9,
    textPrimary: Color.black,
    textSecondary: Color.greyF5,
    textDisabled: Color.greyD2,
    textPlaceholder: Color.greyEF,
    background: Color.white,
    black: Color.black,
    white: Color.white
  }
};

export { lightTheme };
