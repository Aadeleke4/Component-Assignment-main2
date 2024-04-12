import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Img.types';


const StyledImage = styled.img<{ backgroundColor: string; disabled?: boolean }>`
  width: 250px;
  height: auto;
  background-color: ${(props) => props.backgroundColor || '#fff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Image: React.FC<ImageProps> = ({
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

export default Image;