// import original module declarations
import 'styled-components';

import { Color } from './theme.types';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      transparent: 'rgba(0,0,0,0)';
      divider: Color;
      textPrimary: Color;
      textSecondary: Color;
      textDisabled: Color;
      textPlaceholder: Color;
      background: Color;
      black: Color;
      white: Color;
      blue: Color;
      violet: Color;
      yellow: Color;
      red: Color;
    };
  }
}
