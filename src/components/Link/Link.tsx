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

  &:focus,
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.red};
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
  >
    {children}
  </StyledLink>
);
