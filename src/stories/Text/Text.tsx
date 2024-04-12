import React from 'react';
import styled, { css } from 'styled-components';
import { TextProps, FontSize } from './Text.types';


const fontSize: Record<FontSize, string> = {
  small: '12px',
  medium: '16px', 
  large: '24px',
};


const StyledText = styled.p<{ variant: string; fontSize: FontSize; disabled: boolean }>`
  font-family: 'Varela Round', sans-serif;
  font-weight: ${props => props.variant === 'bold' ? 'bold' : 'normal'};
  font-style: ${props => props.variant === 'light' ? 'italic' : 'normal'};
  font-size: ${props => fontSize[props.fontSize]};
  color: ${props => props.disabled ? '#C1C1C1' : 'inherit'};
  opacity: ${props => props.disabled ? 0.5 : 1};

  ${props => props.disabled && css`
    pointer-events: none;
    user-select: none;
  `}
`;

export const Text: React.FC<TextProps> = ({
  variant = 'normal',
  content,
  fontSize = 'medium',
  disabled = false,
}) => {
  return (
    <StyledText variant={variant} fontSize={fontSize} disabled={disabled}>
      {content}
    </StyledText>
  );
};

export default Text;