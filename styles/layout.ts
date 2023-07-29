import { css } from 'styled-components';
import { Breakpoint, HideAtBreakpointsProps, Margin, MarginProps } from './layout.types';

export const Metrics = {
  onlyMobile: `@media screen and (max-width: ${Breakpoint.Mobile}px)`,
  onlyTablet: `@media screen and (min-width: ${Breakpoint.Mobile + 1}px) and (max-width: ${
    Breakpoint.Tablet
  }px)`,
  tablet: `@media screen and (min-width: ${Breakpoint.Tablet}px)`,
  desktop: `@media screen and (min-width: ${Breakpoint.Desktop}px)`,
  hd: `@media screen and (min-width:${Breakpoint.HD}px)`
};

export enum BorderRadius {
  small = '5px',
  medium = '10px',
  large = '20px'
}

const hideAtBreakpoints = ({
  hideOnMobile,
  hideOnTablet,
  hideOnDesktop
}: HideAtBreakpointsProps) => {
  return css`
    ${hideOnMobile &&
    css`
      ${Metrics.onlyMobile} {
        display: none !important;
      }
    `}

    ${hideOnTablet &&
    css`
      ${Metrics.onlyTablet} {
        display: none !important;
      }
    `}

    ${hideOnDesktop &&
    css`
      ${Metrics.desktop} {
        display: none !important;
      }
    `}
  `;
};

const getMargins = (mt: Margin | undefined, ml: Margin | undefined) => {
  return css`
    ${mt !== undefined &&
    css`
      margin-top: ${mt === 'auto' ? 'auto' : `${mt}px`};
    `};
    ${ml !== undefined &&
    css`
      margin-left: ${ml === 'auto' ? 'auto' : `${ml}px`};
    `};
  `;
};

const applyMargins = ({ mgt, mgl, mdMgt, mdMgl, lgMgt, lgMgl }: MarginProps) => {
  return css`
    //Margins
    ${getMargins(mgt, mgl)}

    ${Metrics.tablet} {
      ${getMargins(mdMgt, mdMgl)};
    }

    ${Metrics.desktop} {
      ${getMargins(lgMgt, lgMgl)};
    }
  `;
};

const apply = (p: MarginProps & HideAtBreakpointsProps) => {
  return css`
    ${applyMargins(p)};
    ${hideAtBreakpoints(p)};
  `;
};

const layout = {
  hideAtBreakpoints,
  applyMargins,
  apply
};

export default layout;
