import 'styled-components';

declare module 'styled-components' {
  export interface ThemeColors {
    dark: string;
    light: string;
    blue: string;
    pink: string;
    pink30: string;
  }

  export interface DefaultTheme {
    baseFontSize: number;
    colors: ThemeColors;
    breakpoints: {
      m: number;
      l: number;
      xl: number;
    };
    fonts: {
      primary: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
  }
}
