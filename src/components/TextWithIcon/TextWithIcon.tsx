import { FunctionComponent, ComponentChildren } from 'preact';
import styled from 'styled-components';

import { Icon, IconProps, IconName } from '@components/Icon';

export interface TextWithIconProps extends Pick<IconProps, 'alt'> {
  children: ComponentChildren;
  className?: string;
  icon: IconName;
}

const iconMarginSize = 0.125;
const hangingOffsetSize = 0.125;

const StyledTextWithIcon = styled.span`
  &::before {
    display: inline-block;
    margin-right: ${hangingOffsetSize + iconMarginSize}em;
    content: ' ';
    width: 0;
  }
`;

const StyledNoWrap = styled.span`
  display: inline-flex;
  align-items: baseline;
  margin-left: ${-hangingOffsetSize - iconMarginSize}em;
`;

const StyledIcon = styled(Icon)<IconProps>`
  align-self: center;
  height: 1em;
  margin-right: ${iconMarginSize}em;
  margin-left: ${iconMarginSize}em;
  transform: translateY(0.0625em);
`;

export const TextWithIcon: FunctionComponent<TextWithIconProps> = ({
  children,
  className,
  icon,
  alt,
}) => (
  <StyledTextWithIcon className={className}>
    <StyledNoWrap>
      <StyledIcon name={icon} alt={alt} />
      {children}
    </StyledNoWrap>
  </StyledTextWithIcon>
);
