import { DefaultTheme } from 'styled-components';

import { variables, convertVariableToTheme } from './variables';

export const theme: DefaultTheme = {
  baseFontSize: 16,
  breakpoints: {
    m: 624,
    l: 928,
    xl: 1224,
  },
  fonts: {
    primary: 'Manrope, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: convertVariableToTheme(variables.colors.light, 'color'),
};
