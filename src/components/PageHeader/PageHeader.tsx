import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem, breakpoint } from '@styled';
import { Logotype } from '@components/Logotype';

export interface PageHeaderProps {
  className?: string;
}

const StyledHeader = styled.header`
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};

  ${breakpoint('m')} {
    padding-top: ${rem(40)};
    padding-bottom: ${rem(40)};
  }
`;

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ className }) => (
  <StyledHeader className={className}>
    <Logotype />
  </StyledHeader>
);
