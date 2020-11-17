import { ComponentChildren, FunctionComponent } from 'preact';
import styled, { css } from 'styled-components';

import { rem } from '@styled';

const TextSize = {
  Hero: 'hero',
  H2: 'h2',
  Body: 'body',
} as const;

export type TextSize = typeof TextSize[keyof typeof TextSize];

export interface TextProps {
  children: ComponentChildren;
  className?: string;
  size?: TextSize;
}

export const StyledText = styled.span<{ size: TextSize }>`
  ${({ size }) => {
    if (size === TextSize.Hero) {
      return css`
        font-size: ${rem(32)};
        line-height: ${rem(48)};
      `;
    };

    if (size === TextSize.H2) {
      return css`
        font-size: ${rem(24)};
        line-height: ${rem(32)};
      `;
    }

    return css`
    `;
  }}
`;

export const Text: FunctionComponent<TextProps> = ({
  children,
  className,
  size = 'body',
}) => (
  <StyledText className={className} size={size}>{children}</StyledText>
);
