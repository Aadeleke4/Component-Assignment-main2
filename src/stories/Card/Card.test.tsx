import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card Component", () => {
  // Visibility test
  it("should be visible when rendered", () => {
    render(<Card defaultImage="path/to/image.jpg" text="Sample Text" />);
    const cardText = screen.getByText("Sample Text");
    expect(cardText).toBeVisible();
  });

  // Disabled state test
  it("should show decreased opacity and prevent interaction when disabled", () => {
    render(<Card defaultImage="path/to/image.jpg" disabled={true} />);
    const cardContainer = screen.getByText("Lorem Ipsum").parentElement; // Grabbing parent as card container
    expect(cardContainer).toHaveStyle("opacity: 0.5");
    expect(cardContainer).toHaveStyle("pointer-events: none");
    expect(cardContainer).toHaveStyle("filter: grayscale(100%)");
  });
});
