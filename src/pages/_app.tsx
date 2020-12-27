import { AppProps } from 'next/app';
import { FunctionComponent } from 'preact';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme as themeProviderValue } from '@styled';

import commissioner400WOFF2 from '@resources/fonts/Commissioner-400.woff2';
import commissioner400WOFF from '@resources/fonts/Commissioner-400.woff';
import commissioner400TTF from '@resources/fonts/Commissioner-400.ttf';
import commissioner600WOFF2 from '@resources/fonts/Commissioner-600.woff2';
import commissioner600WOFF from '@resources/fonts/Commissioner-600.woff';
import commissioner600TTF from '@resources/fonts/Commissioner-600.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Commissioner';
    font-style: normal;
    font-weight: 400;
    src:
      url(${commissioner400WOFF2}) format('woff2'),
      url(${commissioner400WOFF}) format('woff'),
      url(${commissioner400TTF}) format('truetype');
  }

  @font-face {
    font-family: 'Commissioner';
    font-style: normal;
    font-weight: 600;
    src:
      url(${commissioner600WOFF2}) format('woff2'),
      url(${commissioner600WOFF}) format('woff'),
      url(${commissioner600TTF}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.baseFontSize}px;
  }
`;

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={themeProviderValue}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
