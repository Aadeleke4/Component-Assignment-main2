import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ isError: boolean; disabled: boolean }>`
  display: block;
  margin: 0 0 4px;
  color: ${(props) => (props.isError ? "#FF0000" : "black")};
`;

const StyledInput = styled.input<{ isError: boolean; disabled: boolean }>`
  display: block;
  width: 150px;
  padding: 8px;
  margin: 0 0 8px;
  font-size: 16px; // Corrected from size to font-size
  border-radius: 4px;
  border: ${(props) =>
    props.isError ? "1px solid #FF0000" : "1px solid #000"};
  background: ${(props) => (props.disabled ? "#F5F5F5" : "white")};
  color: ${(props) => (props.disabled ? "#A8A8A8" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const ErrorMessage = styled.span`
  color: #FF0000;
  font-size: 14px; // Corrected from size to font-size
`;

export const Label: React.FC<LabelProps> = ({
  label,
  variants,
  errorMessage,
  disabled = false,
}) => {
  const isError = variants === "error";

  return (
    <StyledLabel isError={isError} disabled={disabled}>
      {label}
      <StyledInput
        type="text" // Ensure type is explicitly defined if needed
        isError={isError}
        disabled={disabled}
        aria-disabled={disabled ? "true" : "false"} // Correctly setting aria-disabled
        aria-invalid={isError ? "true" : "false"} // Correctly setting aria-invalid
      />
      {isError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledLabel>
  );
};

export default Label;
