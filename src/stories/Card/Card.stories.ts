import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    defaultImage: { control: 'text' },
    backgroundColor: { control: 'color' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Card>;

export const Primary: StoryObj<typeof Card> = {
  args: {
    defaultImage: 'https://via.placeholder.com/200x300',
    backgroundColor: '#000000',
    text: 'Hello World',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');
    await userEvent.hover(card);
    await expect(canvas.getByTestId('card-text')).toHaveStyle('opacity: 1');
  }
};

export const Disabled: StoryObj<typeof Card> = {
  args: {
    defaultImage: 'https://via.placeholder.com/200x300',
    backgroundColor: '#000000',
    text: 'Disabled Card',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByTestId('card-container');
    
    // Instead of trying to click, check if the element has the correct styles
    await expect(card).toHaveStyle('pointer-events: none'); // Confirm no pointer events
    await expect(card).toHaveStyle('filter: grayscale(100%)'); // Confirm grayscale filter
    
  }
};
