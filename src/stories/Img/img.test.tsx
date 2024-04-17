import { render, screen } from "@testing-library/react";
import Image from "./Img";
import "@testing-library/jest-dom"; // Import the matcher

describe("Image Component", () => {
  it("should render without crashing", () => {
    render(<Image src="test-file-stub" />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  it("should indicate disabled state visually", () => {
    render(<Image src="test-file-stub" disabled={true} />);
    const imageElement = screen.getByRole("img");
    expect(getComputedStyle(imageElement).opacity).toBe("0.5"); // Check opacity
  });
});
