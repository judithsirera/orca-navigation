export type Margin = 0 | 2 | 4 | 8 | 16 | 24 | 32 | 48 | 'auto';

export interface MarginProps {
  mgl?: Margin;
  mgt?: Margin;
  md_mgl?: Margin;
  md_mgt?: Margin;
  lg_mgl?: Margin;
  lg_mgt?: Margin;
}

export interface HideAtBreakpointsProps {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
}

export type LayoutProps = MarginProps & HideAtBreakpointsProps;

/**
 * Maximum amount of Px before jumping to next breakpoint
 */
export enum Breakpoint {
  Mobile = 576,
  Tablet = 768,
  Desktop = 1024,
  HD = 1280
}
