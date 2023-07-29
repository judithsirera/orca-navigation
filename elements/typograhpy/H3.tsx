import styled, { css } from 'styled-components';
import layout from 'styles/layout';
import { FontFamily, FontSize, FontWeight } from 'styles/theme/theme.types';
import { TypographyProps } from './typography.types';
import builder from './utils/builder';

const H3 = styled.h3<TypographyProps>`
  ${({ theme: { colors }, color = colors.textPrimary, ...props }) => css`
    ${builder(FontFamily.akshar, FontSize.heading3, FontWeight.bold, color, -2)};

    ${layout.apply(props)};
  `}
`;

export default H3;
