import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['dark', 'light'] },
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'dark',
    label: 'Button',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'light',
    label: 'Button',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    variant: 'dark',
    label: 'Button',
    disabled: true,
  },
};
