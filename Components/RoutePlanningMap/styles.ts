import styled, { css } from 'styled-components';
import { BorderRadius } from 'styles/layout';

export const LoaderContainer = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.background}30;
  `}
`;

export const RoutePlanningMapContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const InfoCard = styled.div`
  ${({ theme: { colors } }) => css`
    position: absolute;
    top: 24px;
    left: 0;
    width: 360px;
    padding: 16px;
    border-radius: ${BorderRadius.medium};
    background-color: ${colors.background}80;
    transform: translateX(-50%);
    left: 50%;
    text-align: center;
  `}
`;
