import styled, { css } from 'styled-components';
import layout from 'styles/layout';
import { FontFamily, FontSize, FontWeight } from 'styles/theme/theme.types';
import { TypographyProps } from './typography.types';
import builder from './utils/builder';

const Paragraph = styled.p<TypographyProps>`
  ${({ theme: { colors }, color = colors.textPrimary, ...props }) => css`
    ${builder(FontFamily.akshar, FontSize.body, FontWeight.regular, color)};

    ${layout.apply(props)};
  `}
`;

export default Paragraph;
