import { DefaultTheme } from 'styled-components';
import { lightTheme } from './light-theme';

type Theme = 'light';

const Themes: Record<Theme, DefaultTheme> = {
  light: lightTheme
};

export default Themes;
