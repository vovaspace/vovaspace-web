import { FunctionComponent, ComponentChildren } from 'preact';
import styled from 'styled-components';

export interface LinkProps {
  children: ComponentChildren;
  className?: string;
  href: string;
  target?: 'blank' | 'self';
}

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const Link: FunctionComponent<LinkProps> = ({
  children,
  className,
  href,
  target = 'blank',
}) => (
  <StyledLink
    className={className}
    href={href}
    target={`_${target}`}
    rel={target === 'blank' ? 'noopener' : undefined}
  >
    {children}
  </StyledLink>
);
