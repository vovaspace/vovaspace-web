import { FunctionComponent } from 'preact';
import styled from 'styled-components';

import { rem } from '@styled';

import imageWEBP from './assets/memoji.webp';
import imageWEBPx2 from './assets/memoji@2x.webp';
import imageWEBPx3 from './assets/memoji@3x.webp';
import imagePNG from './assets/memoji.png';
import imagePNGx2 from './assets/memoji@2x.png';
import imagePNGx3 from './assets/memoji@3x.png';

export interface MemojiProps {
  className?: string;
}

const StyledPicture = styled.picture`
  display: flex;
  flex-shrink: 0;
`;

const StyledImage = styled.img`
  width: auto;
  height: ${rem(80)};
`;

export const Memoji: FunctionComponent<MemojiProps> = ({ className }) => (
  <StyledPicture className={className}>
    <source srcSet={`${imageWEBP}, ${imageWEBPx2} 2x, ${imageWEBPx3} 3x`} type="image/webp" />
    <source srcSet={`${imagePNG}, ${imagePNGx2} 2x, ${imagePNGx3} 3x`} type="image/png" />
    <StyledImage src={imagePNGx3} width="69" height="80" alt="Memoji" role="presentation" />
  </StyledPicture>
);
