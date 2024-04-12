import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { RadioButtonProps } from './RButton.types';

const Label = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  position: absolute;
`;

const radioVisualStyles = css<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? '#007bff' : 'transparent')};
  transition: all 0.2s;
`;

const RadioVisual = styled.div<{ checked: boolean }>`
  ${radioVisualStyles}
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled,
  onChange,
}) => {
  const [checked, setChecked] = useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      const newCheckedStatus = e.target.checked;
      setChecked(newCheckedStatus);
      if (onChange) {
        onChange(newCheckedStatus);
      }
    }
  };

  return (
    <Label disabled={disabled}>
      <HiddenRadio
        checked={checked}
        disabled={disabled}
        onChange={handleRadioChange}
      />
      <RadioVisual checked={checked} />
      {label}
    </Label>
  );
};

export default RadioButton;
