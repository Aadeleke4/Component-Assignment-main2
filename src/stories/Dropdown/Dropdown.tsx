import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  border: 1px solid #000;
  background-color: black;
  color: white;
  width: 150px; 
`;

const DropdownListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #2493FA;
    color: white;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const DropdownButton = styled.button<{ disabled: boolean }>`
  padding: 8px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: ${props => props.disabled ? '#C1C1C1' : 'black'};
  width: 150px;
  color: ${props => props.disabled ? '#A8A8A8' : 'white'};
  
  &:hover {
    background-color: ${props => props.disabled ? '#C1C1C1' : '#ffffff'};
    color: ${props => props.disabled ? '#A8A8A8' : 'white'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;


export const Dropdown: React.FC<DropdownProps> = ({
  options,
  label,
  backgroundColor,
  disabled = false,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option: string) => {
    onSelect?.(option);
    setIsOpen(false); 
  };

  return (
    <DropdownContainer>
      <StyledLabel>{label}</StyledLabel>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        style={{ backgroundColor: backgroundColor || 'black' }}
      >
        Select
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleSelection(option)}
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;