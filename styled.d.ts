import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    baseFontSize: number,
    colors: {
      dark: string,
      blue: string,
      red: string,
    },
    breakpoints: {
      s: number,
      m: number,
      l: number,
    },
    fonts: {
      primary: string;
    },
  }
}
