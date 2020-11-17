import { DefaultTheme } from 'styled-components';

export const rem = (pxSize: number) => ({ theme }: { theme: DefaultTheme }) => `${pxSize / theme.baseFontSize}rem`;
