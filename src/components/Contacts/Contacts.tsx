import { FunctionComponent } from 'preact';
import styled, { css } from 'styled-components';

import { rem } from '@styled';
import { Link } from '@components/Link';

export interface ContactsProps {
  className?: string;
}

const StyledContacts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: ${rem(-16)};
  list-style: none;
`;

const StyledListItem = styled.li<{ breaked?: boolean }>`
  margin-bottom: ${rem(16)};

  &:not(:last-child) {
    margin-right: ${rem(16)};
  }

  ${({ breaked }) => (breaked ? css`
    flex-basis: 100%;
  ` : null)}
`;

export const Contacts: FunctionComponent<ContactsProps> = ({
  className,
}) => (
  <StyledContacts className={className}>
    <StyledListItem><Link href="https://t.me/vovaspace">Telegram</Link></StyledListItem>
    <StyledListItem><Link href="https://instagram.com/vovaspace">Instagram</Link></StyledListItem>
    <StyledListItem><Link href="https://github.com/vovaspace">GitHub</Link></StyledListItem>
    <StyledListItem breaked><Link href="mailto:me@vovaspace.com">me@vovaspace.com</Link></StyledListItem>
  </StyledContacts>
);
