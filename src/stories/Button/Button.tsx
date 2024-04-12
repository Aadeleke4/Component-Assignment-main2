import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';


const StyledButton = styled.button<ButtonProps>`
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s;
  
  ${({ variant, backgroundColor }) => variant === 'light' ? css`
    border: 1px solid #000000;
    color: #000000;
    background-color: ${backgroundColor || '#FFFFFF'};
  ` : css`
    border: none;
    color: #FFFFFF;
    background-color: ${backgroundColor || '#000000'};
  `}

  &:hover {
    background-color: ${({ variant }) => variant === 'light' ? '#2493FA' : '#2493FA'};
    border: ${({ variant }) => variant === 'light' ? 'none' : 'none'};
    color: ${({ variant }) => variant === 'light' ? '#FFFFFF':'#FFFFFF'}
  }

  &:active {
    box-shadow: ${({ disabled }) => !disabled && '0 2px 2px rgba(0, 0, 0, 0.5)'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: gray;
    color: white;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  label,
  backgroundColor,
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;