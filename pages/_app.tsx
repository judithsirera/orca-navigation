import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global.styles';
import Themes from 'styles/theme/lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alltrana</title>
        <meta name="description" content="Training together" />
      </Head>
      <ThemeProvider theme={Themes.light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
