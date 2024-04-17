import { render } from "@testing-library/react";
import Text from "./Text";
import "@testing-library/jest-dom";

describe("Text Component", () => {
  it("renders text content correctly", () => {
    const content = "Hello, World!";
    const { getByText } = render(<Text content={content} />);
    expect(getByText(content)).toBeInTheDocument();
  });

  it("applies 'bold' variant correctly", () => {
    const content = "Bold Text";
    const { getByText } = render(<Text content={content} variant="bold" />);
    const textElement = getByText(content);
    expect(textElement).toHaveStyle("font-weight: bold;");
  });

  it("applies 'light' variant correctly", () => {
    const content = "Light Text";
    const { getByText } = render(<Text content={content} variant="light" />);
    const textElement = getByText(content);
    expect(textElement).toHaveStyle("font-style: italic;");
  });

  it("applies 'disabled' styles correctly", () => {
    const content = "Disabled Text";
    const { getByText } = render(<Text content={content} disabled />);
    const textElement = getByText(content);
    expect(textElement).toHaveStyle("color: #C1C1C1;");
    expect(textElement).toHaveStyle("opacity: 0.5;");
    expect(textElement).toHaveStyle("pointer-events: none;");
    expect(textElement).toHaveStyle("user-select: none;");
  });

  it("applies correct font size", () => {
    const content = "Custom Font Size";
    const { getByText } = render(<Text content={content} fontSize="large" />);
    const textElement = getByText(content);
    expect(textElement).toHaveStyle("font-size: 24px;");
  });
});
