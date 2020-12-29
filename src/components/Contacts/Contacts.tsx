import { FunctionComponent } from 'preact';
import styled, { css } from 'styled-components';

import { rem } from '@styled';
import { useLocalization } from '@utils';
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
  font-size: ${rem(18)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${rem(22)};
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
}) => {
  const localization = useLocalization({
    en: {
      telegram: 'Telegram',
      intagram: 'Instagram',
      github: 'GitHub',
    },
    ru: {
      telegram: 'Телеграм',
      intagram: 'Инстаграм',
      github: 'ГитХаб',
    },
  });

  return (
    <StyledContacts className={className}>
      <StyledListItem><Link href="https://t.me/vovaspace/">{localization.telegram}</Link></StyledListItem>
      <StyledListItem><Link href="https://instagram.com/vovaspace/">{localization.intagram}</Link></StyledListItem>
      <StyledListItem><Link href="https://github.com/vovaspace/">{localization.github}</Link></StyledListItem>
      <StyledListItem breaked><Link href="mailto:me@vovaspace.com" target="self">me@vovaspace.com</Link></StyledListItem>
    </StyledContacts>
  );
};
