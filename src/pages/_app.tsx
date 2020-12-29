import { AppProps } from 'next/app';
import Head from 'next/head';
import { FunctionComponent } from 'preact';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme as themeProviderValue, variables, convertVariableToCSS } from '@styled';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    src:
      url('/fonts/Manrope-400.woff2') format('woff2'),
      url('/fonts/Manrope-400.woff') format('woff'),
      url('/fonts/Manrope-400.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    src:
      url('/fonts/Manrope-500.woff2') format('woff2'),
      url('/fonts/Manrope-500.woff') format('woff'),
      url('/fonts/Manrope-500.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    src:
      url('/fonts/Manrope-700.woff2') format('woff2'),
      url('/fonts/Manrope-700.woff') format('woff'),
      url('/fonts/Manrope-700.ttf') format('truetype');
  }

  :root {
    ${convertVariableToCSS(variables.colors.light, 'color')}

    @media (prefers-color-scheme: dark) {
      ${convertVariableToCSS(variables.colors.dark, 'color')}
    }
  }

  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.dark};
    fill: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.baseFontSize}px;
    letter-spacing: 0.05em;
  }

  *::selection {
    background-color: ${({ theme }) => theme.colors.pink30}
  }
`;

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={themeProviderValue}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="alternate" hrefLang="en" href="https://vovaspace.com/en/" />
      <link rel="alternate" hrefLang="ru" href="https://vovaspace.com/ru/" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-apple.png" />
      <link rel="mask-icon" href="/favicon-mask.svg" color="#f0c1a9" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
