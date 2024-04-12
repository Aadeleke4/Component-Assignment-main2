import React from 'react';
import styled from 'styled-components';
import { HeroProps } from './Hero.types';


const StyledImage = styled.img<{ backgroundColor: string; disabled?: boolean }>`
  width: 1920px;
  height: 1080px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Hero: React.FC<HeroProps> = ({
  src,
  backgroundColor = '#fff',
  disabled = false,
}) => {
  return (
    <StyledImage
      src={src}
      backgroundColor={backgroundColor}
      disabled={disabled}
    />
  );
};

export default Hero;