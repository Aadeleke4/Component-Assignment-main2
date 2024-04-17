import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Dropdown } from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    options: { control: "array" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    onSelect: { action: "selected" },
  },
} as Meta<DropdownProps>;

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: "Drop Down",
    options: ["Option 1", "Option 2", "Option 3"],
    onSelect: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getByRole("button", { name: "Drop Down" }); // Assuming dropdown toggler is a button
    await userEvent.click(dropdown); // Open dropdown
    const option = await canvas.findByRole("option", { name: "Option 1" });
    await userEvent.click(option); // Select an option
    await expect(option).toHaveAttribute("aria-selected", "true"); // Verify selection
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    label: "Disabled Drop Down",
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdown = canvas.getByRole("button", { name: "Disabled Drop Down" });
    await userEvent.click(dropdown); // Attempt to open disabled dropdown
    await expect(dropdown).toHaveAttribute("aria-disabled", "true"); // Check if it's truly disabled
    // No options should be interactable or visible
  },
};
