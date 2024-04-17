import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import the matcher
import Label from "./Label";

describe("Label Component", () => {
    it("should render label text", () => {
      const labelText = "Email";
      render(<Label label={labelText} variants="default" />);
      const labelElement = screen.getByText(labelText);
      expect(labelElement).toBeInTheDocument();
    });
  
    it("should render input element", () => {
      render(<Label label="Email" variants="default" />);
      const inputElement = screen.getByRole("textbox");
      expect(inputElement).toBeInTheDocument();
    });
  
    it("should render error message when variants is 'error'", () => {
      const errorMessage = "Invalid email";
      render(<Label label="Email" variants="error" errorMessage={errorMessage} />);
      const errorMessageElement = screen.getByText(errorMessage);
      expect(errorMessageElement).toBeInTheDocument();
    });
  
    it("should disable input when disabled prop is true", () => {
      render(<Label label="Email" variants="default" disabled={true} />);
      const inputElement = screen.getByRole("textbox") as HTMLInputElement;
      expect(inputElement.disabled).toBe(true);
    });
  
    it("should not disable input when disabled prop is false", () => {
      render(<Label label="Email" variants="default" disabled={false} />);
      const inputElement = screen.getByRole("textbox") as HTMLInputElement;
      expect(inputElement.disabled).toBe(false);
    });
  });