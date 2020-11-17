import { DefaultTheme } from 'styled-components';

import { rem } from '@styled';

type BreakpointKey = keyof DefaultTheme['breakpoints'];

export const breakpoint = (key: BreakpointKey) => ({ theme }: { theme: DefaultTheme }) => (
  `@media (min-width: ${rem(theme.breakpoints[key])({ theme })})`
);
