import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';
import { TextWithIcon } from '@components/TextWithIcon';

const StyledHelloWorld = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: ${rem(32)};
  padding-bottom: ${rem(32)};
  font-size: ${rem(48)};
  line-height: 1.5;
`;

const StyledSection = styled.section`
  margin-top: 0;

  &:not(:last-child) {
    margin-bottom: ${rem(16)};
  }
`;

const StyledTitle = styled.h2`
  display: inline;
  margin: 0;
  font-size: inherit;
  font-weight: 400;
  line-height: inherit;
`;

const StyledBoldText = styled.span`
  font-weight: 600;
`;

const StyledDel = styled.del`
  text-decoration: none;
`;

const StyledLineThrough = styled.span`
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    display: block;
    height: 0.125em;
    content: '';
    transform: translateY(0.0625em);
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const HelloWorld: FunctionComponent = () => (
  <StyledHelloWorld>
    <StyledSection as="p">
      Привет!
    </StyledSection>

    <StyledSection>
      <StyledTitle>
        <StyledBoldText>Живу</StyledBoldText>
        {' '}
        в
      </StyledTitle>
      <StyledDel>
        <TextWithIcon icon="arrow-right" alt="→">
          <StyledLineThrough>Тамбове</StyledLineThrough>
        </TextWithIcon>
      </StyledDel>
      <StyledDel>
        <TextWithIcon icon="arrow-right" alt="→">
          <StyledLineThrough>Москве</StyledLineThrough>
        </TextWithIcon>
      </StyledDel>
      <TextWithIcon icon="arrow-right" alt="→">
        Саратове
      </TextWithIcon>
    </StyledSection>

    <StyledSection>
      <StyledTitle>
        <StyledBoldText>Работаю</StyledBoldText>
        {' '}
        в
      </StyledTitle>
      <StyledDel>
        <TextWithIcon icon="arrow-right" alt="→">
          <StyledLineThrough>ProIT</StyledLineThrough>
        </TextWithIcon>
      </StyledDel>
      <TextWithIcon icon="arrow-right" alt="→">
        Atlas Delivery
      </TextWithIcon>
    </StyledSection>
  </StyledHelloWorld>
);
