import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #3B2929;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  h1 {
    font-weight: 500;
    font-size: 54px;
  }
  
  a {
    color: #3B2929;
    text-decoration: none;
  }
`;

const theme = {
  colors: {
    light: "#ffffff",
    dark: "#3B2929",
    red: "#903633",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
