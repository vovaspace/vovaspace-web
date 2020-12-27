import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';
import { Memoji } from '@components/Memoji';

export interface LogotypeProps {
  className?: string;
}

const StyledLogotype = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h1`
  margin-left: ${rem(24)};
  font-size: ${rem(24)};
  line-height: ${rem(30)};
`;

export const Logotype: FunctionComponent<LogotypeProps> = ({
  className,
}) => (
  <StyledLogotype className={className}>
    <Memoji />
    <StyledTitle>Владимир Левандовский</StyledTitle>
  </StyledLogotype>
);
