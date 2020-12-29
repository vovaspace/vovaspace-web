import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem, breakpoint } from '@styled';
import { useLocalization } from '@utils';
import { Memoji } from '@components/Memoji';

export interface LogotypeProps {
  className?: string;
}

const StyledLogotype = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${breakpoint('m')} {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledTitle = styled.h1`
  width: 8em;
  margin-top: 0.6em;
  margin-bottom: 0;
  font-size: ${rem(24)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${rem(32)};

  ${breakpoint('m')} {
    width: auto;
    margin-top: 0;
    margin-bottom: 0.12em;
    margin-left: 1em;
  }

  ${breakpoint('l')} {
    font-size: ${rem(26)};
  }

  ${breakpoint('xl')} {
    font-size: ${rem(28)};
  }
`;

export const Logotype: FunctionComponent<LogotypeProps> = ({
  className,
}) => (
  <StyledLogotype className={className}>
    <Memoji />
    <StyledTitle>
      {useLocalization({
        en: 'Vladimir Lewandowski',
        ru: 'Владимир Левандовский',
      })}
    </StyledTitle>
  </StyledLogotype>
);
