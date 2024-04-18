import { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { Text } from "./Text";
import { within } from "@storybook/testing-library";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["normal", "bold", "light"] },
    },
    content: { control: "text" },
    fontSize: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    disabled: { control: "boolean" },
  },
} as Meta;

export const Normal: StoryObj<TextProps> = {
  args: {
    content: "Normal Text",
    variant: "normal",
  },
};

export const Bold: StoryObj<TextProps> = {
  args: {
    content: "Bold Text",
    variant: "bold",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const boldText = await canvas.findByText("Bold Text");
    console.log(boldText.outerHTML); // Logs the HTML for the boldText element
    expect(boldText).toHaveStyle("font-weight: 700");
  },
};

export const Light: StoryObj<TextProps> = {
  args: {
    content: "Light Text",
    variant: "light",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Light Text")).toHaveStyle({
      fontStyle: "italic",
    });
  },
};

export const Header: StoryObj<TextProps> = {
  args: {
    content: "Header Text",
    variant: "bold",
    fontSize: "large",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Header Text")).toHaveStyle({
      fontSize: "24px",
    });
  },
};

export const Disabled: StoryObj<TextProps> = {
  args: {
    content: "Disabled Text",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textElement = canvas.getByText("Disabled Text");
    await expect(textElement).toHaveStyle("color: #C1C1C1");
    await expect(textElement).toHaveStyle("opacity: 0.5");
    await expect(textElement).toHaveStyle("pointer-events: none");
    await expect(textElement).toHaveStyle("user-select: none");
  },
};
