import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Hero } from "./Hero";
import { HeroProps } from "./Hero.types";
import HeroImg from "./background2.jpeg";

export default {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
} as Meta<HeroProps>;

export const Primary: StoryObj<HeroProps> = {
  args: {
    src: HeroImg,
    backgroundColor: "#ffffff",
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Assuming the Hero component reacts to some user interaction, like a click
    const hero = canvas.getByRole("img"); // Adjust role if necessary
    await userEvent.click(hero);
    await expect(hero).toHaveStyle("opacity: 1"); // Check some style change or state
  },
};

export const Disabled: StoryObj<HeroProps> = {
  args: {
    src: HeroImg,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const hero = canvas.getByRole("img"); // Adjust role if necessary
    await userEvent.click(hero); // Try clicking to see if interaction is disabled
    await expect(hero).toHaveStyle("opacity: 0.5"); // Assuming disabled state changes opacity
  },
};
