import { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Label } from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variants: {
      control: { type: "select", options: ["default", "disabled", "error"] },
    },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

export const Primary: StoryObj<LabelProps> = {
  args: {
    label: "Default Label",
    variants: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Default Label")).toBeInTheDocument();
  },
};

export const Disabled: StoryObj<LabelProps> = {
  args: {
    label: "Disabled Label",
    variants: "disabled",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox"); // Assuming the role of the input is 'textbox'
    await expect(input).toHaveAttribute("aria-disabled", "true");
  },
};

export const Error: StoryObj<LabelProps> = {
  args: {
    label: "Error Label",
    variants: "error",
    errorMessage: "Error occurred",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorMessage = canvas.getByText("Error occurred");
    const input = canvas.getByRole("textbox");
    await expect(errorMessage).toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-invalid", "true");
  },
};
