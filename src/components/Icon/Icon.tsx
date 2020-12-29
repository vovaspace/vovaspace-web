import { FunctionComponent } from 'preact';
import styled from 'styled-components';

export type IconName = 'arrow-right';

const iconPath: Record<IconName, string> = {
  'arrow-right': 'M73 133.5l22.3-19.7-64.5 2V97.8l64 .8L73 81.1l11.2-11.7 35 36.3-34.5 39-11.8-11.2z',
};

export interface IconProps {
  className?: string;
  name: IconName;
  alt?: string;
}

const StyledSvg = styled.svg`
  flex-shrink: 0;
`;

export const Icon: FunctionComponent<IconProps> = ({ className, name, alt }) => (
  <StyledSvg
    className={className}
    viewBox="0 0 150 190"
    xmlns="http://www.w3.org/2000/svg"
  >
    {alt && <text fontSize="0">{alt}</text>}
    <path d={iconPath[name]} role="presentation" />
  </StyledSvg>
);
