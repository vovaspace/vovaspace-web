import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';
import { Contacts } from '@components/Contacts';

const StyledPageFooter = styled.footer`
  padding-top: ${rem(24)};
  padding-bottom: ${rem(48)};
`;

export const PageFooter: FunctionComponent = () => (
  <StyledPageFooter>
    <Contacts />
  </StyledPageFooter>
);
