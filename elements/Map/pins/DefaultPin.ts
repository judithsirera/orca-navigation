import styled, { css } from 'styled-components';
import { Color } from 'styles/theme/theme.types';

interface DefaultPinProps {
  color: Color;
}

const DefaultPin = styled.div.attrs({ id: 'training-marker-pin' })<DefaultPinProps>`
  ${({ color }) => css`
    border-radius: 50%;
    background-color: ${color};

    transition: all 0.2s ease;
    width: 8px;
    height: 8px;
  `}
`;

export default DefaultPin;
