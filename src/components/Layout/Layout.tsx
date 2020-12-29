import { FunctionComponent, ComponentChildren } from 'preact';
import styled from 'styled-components';

import { rem, breakpoint } from '@styled';
import { PageHeader } from '@components/PageHeader';
import { PageFooter } from '@components/PageFooter';

export interface LayoutProps {
  children: ComponentChildren;
  className?: string;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: ${rem(24)};
  padding-left: ${rem(24)};

  ${breakpoint('m')} {
    padding-right: ${rem(40)};
    padding-left: ${rem(40)};
  }

  ${breakpoint('l')} {
    padding-right: ${rem(80)};
    padding-left: ${rem(80)};
  }

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`;

const StyledContent = styled.div`
  flex: 1;
`;

export const Layout: FunctionComponent<LayoutProps> = ({ children, className }) => (
  <StyledLayout className={className}>
    <PageHeader />
    <StyledContent>{children}</StyledContent>
    <PageFooter />
  </StyledLayout>
);
