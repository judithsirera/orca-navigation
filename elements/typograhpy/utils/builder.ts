import { css } from 'styled-components';
import { Color, FontFamily, FontSize, FontWeight } from 'styles/theme/theme.types';

const builder = (
  fontFamily: FontFamily,
  fontSize: FontSize,
  fontWeight: FontWeight,
  color: Color,
  letterSpacing?: number
) => {
  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    color: ${color};

    ${letterSpacing !== undefined &&
    css`
      letter-spacing: ${letterSpacing}px;
    `}
  `;
};

export default builder;
