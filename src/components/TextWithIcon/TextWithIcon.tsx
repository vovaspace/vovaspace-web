import { FunctionComponent, ComponentChildren } from 'preact';
import styled from 'styled-components';

import { Icon, IconProps, IconName } from '@components/Icon';

export interface TextWithIconProps extends Pick<IconProps, 'alt'> {
  children: ComponentChildren;
  className?: string;
  icon: IconName;
}

const StyledTextWithIcon = styled.span`
  display: inline-flex;
  align-items: baseline;
`;

const StyledIcon = styled(Icon)<IconProps>`
  align-self: center;
  height: 1em;
  margin-right: 0.125em;
  margin-left: 0.125em;
  transform: translateY(0.035em);
`;

export const TextWithIcon: FunctionComponent<TextWithIconProps> = ({
  children,
  className,
  icon,
  alt,
}) => (
  <StyledTextWithIcon className={className}>
    <StyledIcon name={icon} alt={alt} />
    {children}
  </StyledTextWithIcon>
);
