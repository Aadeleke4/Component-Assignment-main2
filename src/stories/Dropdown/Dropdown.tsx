import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

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
  z-index: 1; // Ensure the dropdown list is above other content
`;

const DropdownListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #2493fa;
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
  background-color: ${(props) => (props.disabled ? "#C1C1C1" : "black")};
  width: 150px;
  color: ${(props) => (props.disabled ? "#A8A8A8" : "white")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#C1C1C1" : "#ffffff")};
    color: ${(props) => (props.disabled ? "#A8A8A8" : "black")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const Dropdown: React.FC<DropdownProps> = React.memo(({ options, label, backgroundColor = "black", disabled = false, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option: string, event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onSelect?.(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <StyledLabel>{label}</StyledLabel>
      <DropdownButton
        onClick={() => setIsOpen(!isOpen)}
        disabled={disabled}
        style={{ backgroundColor }}
      >
        Select
      </DropdownButton>
      {isOpen && (
        <DropdownList role="menu">
          {options.map((option, index) => (
            <DropdownListItem
              key={index}
              onClick={(event) => handleSelection(option, event)}
              role="menuitem"
            >
              {option}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
});

export default Dropdown;
