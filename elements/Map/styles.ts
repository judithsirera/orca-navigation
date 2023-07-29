import styled, { css } from 'styled-components';
import layout, { BorderRadius } from 'styles/layout';
import { LayoutProps } from 'styles/layout.types';

interface MapContainerProps extends LayoutProps {
  height: number | 'full';
}
export const MapContainer = styled.div<MapContainerProps>`
  ${({ height, ...props }) => css`
    width: 100%;
    border-radius: ${BorderRadius.large};

    ${height === 'full'
      ? css`
          height: 100%;
        `
      : css`
          height: ${height}px;
        `}

    ${layout.apply(props)}
  `}
`;
