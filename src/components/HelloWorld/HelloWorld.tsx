import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem, breakpoint } from '@styled';
import { useLocalization } from '@utils';
import { TextWithIcon } from '@components/TextWithIcon';

const StyledHelloWorld = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  font-size: ${rem(34)};
  line-height: 1.5;

  ${breakpoint('m')} {
    font-size: ${rem(42)};
  }

  ${breakpoint('l')} {
    font-size: ${rem(48)};
  }

  ${breakpoint('xl')} {
    font-size: ${rem(54)};
  }
`;

const StyledSection = styled.section`
  margin-top: 0;

  &:not(:last-child) {
    margin-bottom: 0.5em;

    ${breakpoint('m')} {
      margin-bottom: 0.4em;
    }
  }
`;

const StyledTitle = styled.h2`
  display: inline;
  margin: 0;
  font-size: inherit;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: inherit;
`;

const StyledTextSection = styled.span`
  margin-right: 0.3em;
  text-decoration: none;
  
  & + & {
    margin-left: -0.3em;
  }
`;

const StyledLineThrough = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    display: block;
    height: 0.13em;
    content: '';
    transform: translateY(0.03em);
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const HelloWorld: FunctionComponent = () => {
  const localization = useLocalization({
    en: {
      hi: 'Hi!',
      work: 'Coding',
      live: 'Living',
      at: 'at',
      in: 'in',
      tambov: 'Tambov',
      moscow: 'Moscow',
      saratov: 'Saratov',
    },
    ru: {
      hi: 'Привет!',
      work: 'Пишу код',
      live: 'Живу',
      at: 'в',
      in: 'в',
      tambov: 'Тамбове',
      moscow: 'Москве',
      saratov: 'Саратове',
    },
  });

  return (
    <StyledHelloWorld>
      <StyledSection as="p">
        {localization.hi}
      </StyledSection>

      <StyledSection>
        <StyledTitle>{localization.live}</StyledTitle>
        {' '}
        {localization.in}
        {' '}
        <StyledTextSection as="del" dateTime="2016-09-01">
          <StyledLineThrough>{localization.tambov}</StyledLineThrough>
        </StyledTextSection>
        <StyledTextSection as="del" dateTime="2020-08-29">
          <TextWithIcon icon="arrow-right" alt="→">
            <StyledLineThrough>{localization.moscow}</StyledLineThrough>
          </TextWithIcon>
        </StyledTextSection>
        <StyledTextSection>
          <TextWithIcon icon="arrow-right" alt="→">{localization.saratov}</TextWithIcon>
        </StyledTextSection>
      </StyledSection>

      <StyledSection>
        <StyledTitle>{localization.work}</StyledTitle>
        {' '}
        {localization.at}
        {' '}
        <StyledTextSection as="del" dateTime="2020-10-19">
          <StyledLineThrough>ProIT</StyledLineThrough>
        </StyledTextSection>
        <StyledTextSection>
          <TextWithIcon icon="arrow-right" alt="→">Atlas Delivery</TextWithIcon>
        </StyledTextSection>
      </StyledSection>
    </StyledHelloWorld>
  );
};
