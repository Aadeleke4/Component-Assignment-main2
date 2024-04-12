import { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  tags:['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    variants: {
      control: { type: 'select', options: ['default', 'disabled', 'error'] },
    },
    errorMessage: { control: 'text' },
  },
} as Meta;

export const Primary: StoryObj<LabelProps> = {
  args: {
    label: 'Default',
    variants: 'default',
  },
};

export const Disabled: StoryObj<LabelProps> = {
  args: {
    label: 'Disabled',
    variants: 'disabled',
    disabled: true,
  },
};

export const Error: StoryObj<LabelProps> = {
  args: {
    label: 'Error',
    variants: 'error',
    errorMessage: 'Error message',
  }
};
