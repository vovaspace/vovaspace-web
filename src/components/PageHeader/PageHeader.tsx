import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';
import { Logotype } from '@components/Logotype';

export interface PageHeaderProps {
  className?: string;
}

const StyledHeader = styled.header`
  padding-top: ${rem(40)};
  padding-bottom: ${rem(40)};
`;

export const PageHeader: FunctionComponent<PageHeaderProps> = ({ className }) => (
  <StyledHeader className={className}>
    <Logotype />
  </StyledHeader>
);
