import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["dark", "light"] },
    },
    label: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "dark",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    await expect(button).not.toBeDisabled();
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "light",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    await expect(button).not.toBeDisabled();
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: "dark",
    label: "Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button); // This click should have no effect because the button is disabled
    await expect(button).toBeDisabled();
  },
};
