import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { Text } from '@components/Text';

export interface LogotypeProps {
  className?: string;
};

const StyledLogotype = styled.div`
  display: flex;
`;

export const Logotype: FunctionComponent<LogotypeProps> = ({
  className,
}) => (
  <StyledLogotype className={className}>
    <Text size="h2">Владимир Левандовский</Text>
  </StyledLogotype>
);
