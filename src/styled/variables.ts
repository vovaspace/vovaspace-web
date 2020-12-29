import { ThemeColors } from 'styled-components';

const getCSSVariableName = (name: string, prefix: string) => `--${prefix}${`${name.charAt(0).toUpperCase()}${name.slice(1)}`}`;

export const convertVariableToTheme = <T>(
  variable: Record<keyof T, string>,
  prefix: string,
): Record<keyof T, string> => Object.keys(variable)
    .reduce<Record<string, string>>(
    (acc, key) => ({
      ...acc,
      [key]: `var(${getCSSVariableName(key, prefix)})`,
    }),
    {},
  ) as Record<keyof T, string>;

export const convertVariableToCSS = <T>(
  variable: Record<keyof T, string>,
  prefix: string,
): string => Object.entries<string>(variable)
    .reduce<string>(
    (acc, [key, value]) => (
      `${acc} ${getCSSVariableName(key, prefix)}: ${value};`
    ),
    '',
  );

const colors: Record<'light' | 'dark', ThemeColors> = {
  light: {
    dark: '#050505',
    light: '#ffffff',
    blue: '#007aff',
    pink: '#ff2d55',
    pink30: 'rgba(255, 45, 85, 0.3)',
  },
  dark: {
    dark: '#ffffff',
    light: '#0f0f10',
    blue: '#0a84ff',
    pink: '#ff375f',
    pink30: 'rgba(255, 55, 95, 0.3)',
  },
};

export const variables = {
  colors,
};
