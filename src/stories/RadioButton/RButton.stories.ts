import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RButton';
import { RadioButtonProps } from './RButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes:{
  label: {control: 'string'},
  disabled: {control: 'boolean'},
  onChange: {action: 'checked'}
  }
} as Meta<RadioButtonProps>;

export const Primary: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Option 1',
   
  },
};

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    label: 'Disabled Option',
    disabled: true,
  },
};
