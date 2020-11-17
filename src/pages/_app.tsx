
import { AppProps } from 'next/app';
import { FunctionComponent } from 'preact';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '@styled';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.baseFontSize}px;
  }
`;

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default App;
