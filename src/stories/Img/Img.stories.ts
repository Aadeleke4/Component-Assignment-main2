import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Image } from "./Img";
import { ImageProps } from "./Img.types";
import Balenzi from "./Balenzi.png";

export default {
  title: "Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<ImageProps>;

export const Primary: StoryObj<ImageProps> = {
  args: {
    src: Balenzi,
    backgroundColor: "#ffffff",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img"); // Ensure your Image component has the 'img' role if it's not a native 'img'
    await userEvent.click(image);
    // Verify the image responds to clicks or has a visual response if applicable
    await expect(image).not.toHaveStyle("opacity: 0.5"); // Check that the image is fully opaque
  },
};

export const Disabled: StoryObj<ImageProps> = {
  args: {
    src: Balenzi,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const image = canvas.getByRole("img");
    await userEvent.click(image); // Try clicking to see if interaction is disabled
    await expect(image).toHaveStyle("opacity: 0.5"); // Assuming disabled state changes opacity
    // Ensure the image does not respond to clicks
  },
};
