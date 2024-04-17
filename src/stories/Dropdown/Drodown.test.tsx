import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import "@testing-library/jest-dom";

describe("Dropdown Component", () => {
  // Test for visibility
  it("should be visible when rendered", () => {
    render(
      <Dropdown
        label="Drop Down"
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={() => {}}
      />
    );
    const dropdownButton = screen.getByRole("button", { name: /select/i });
    expect(dropdownButton).toBeVisible();
  });

  // Test for disabled state
  it("should be disabled when the disabled prop is true", () => {
    render(
      <Dropdown
        label="Disabled Drop Down"
        options={["Option 1", "Option 2", "Option 3"]}
        disabled={true}
      />
    );
    const dropdownButton = screen.getByRole("button", { name: /select/i });
    expect(dropdownButton).toBeDisabled();
  });

  // Test background color change on disabled state
  it("should change background color when disabled", () => {
    const { rerender } = render(
      <Dropdown
        label="Drop Down"
        options={["Option 1", "Option 2", "Option 3"]}
      />
    );
    const dropdownButton = screen.getByRole("button", { name: /select/i });
    expect(dropdownButton).not.toHaveStyle("background-color: grey"); // Assuming default is not grey

    rerender(
      <Dropdown
        label="Disabled Drop Down"
        options={["Option 1", "Option 2", "Option 3"]}
        disabled={true}
        backgroundColor="grey"
      />
    );
    expect(dropdownButton).toHaveStyle("background-color: grey");
  });
});
