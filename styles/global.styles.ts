import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme: { colors } }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: Akshar, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scroll-behavior: smooth;
      min-height: 100vh;

      background-color: ${colors.background};
    }

    /* latin */
    @font-face {
      font-family: 'Akshar';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/assets/fonts/Akshar-Regular.ttf') format('truetype');
    }

    /* latin */
    @font-face {
      font-family: 'Akshar';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/assets/fonts/Akshar-Bold.ttf') format('truetype');
    }

    // Add here as many styles as you want
  `}
`;

export default GlobalStyle;
