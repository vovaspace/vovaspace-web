import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';
import { Text, TextProps } from '@components/Text';

const StyledHelloWorld = styled.main`
  display: flex;
  flex-direction: column;
`;

const StyledText = styled(Text)<TextProps>`
  margin-top: 0;

  &:not(:last-child) {
    margin-bottom: ${rem(8)};
  }
`;

export const HelloWorld: FunctionComponent = () => (
  <StyledHelloWorld>
    <StyledText size="hero">Привет</StyledText>
    <StyledText size="hero">Живу в Саратове</StyledText>
    <StyledText size="hero">Пишу код в Atlas Delivery</StyledText>
  </StyledHelloWorld>
);
