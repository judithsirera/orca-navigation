import styled, { css } from 'styled-components';

const PageLayout = styled.div`
  ${({ theme }) =>
    css`
      width: 100%;
      height: 100vh;
      padding: 24px;
      background-color: ${theme.colors.background};
      position: relative;
      box-sizing: border-box;
    `}
`;

export default PageLayout;
