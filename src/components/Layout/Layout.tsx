import { FunctionComponent, ComponentChildren } from 'preact';
import Head from 'next/head';
import styled from 'styled-components';

import { rem, breakpoint } from '@styled';
import { PageHeader } from '@components/PageHeader';
import { PageFooter } from '@components/PageFooter';

export interface LayoutProps {
  children: ComponentChildren;
  className?: string;
  title: string;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-right: ${rem(20)};
  padding-left: ${rem(20)};

  ${breakpoint('l')} {
    padding-right: ${rem(80)};
    padding-left: ${rem(80)};
  }
`;

const StyledContent = styled.div`
  flex: 1;
`;

export const Layout: FunctionComponent<LayoutProps> = ({ children, className, title }) => (
  <StyledLayout className={className}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <PageHeader />
    <StyledContent>{children}</StyledContent>
    <PageFooter />
  </StyledLayout>
);
