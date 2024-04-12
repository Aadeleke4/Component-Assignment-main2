import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { TextProps} from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  tags:['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['normal', 'bold', 'light'] },
    },
    content: { control: 'text' },
    fontSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
  },
} as Meta;


export const Normal: StoryObj<TextProps> = {
  args: {
    content: 'Normal Text',
    variant: 'normal',
  },
};

export const Bold: StoryObj<TextProps> = {
  args:{
    content: 'Normal Text',
    variant: 'bold'
  }
}

export const light: StoryObj<TextProps> = {
  args:{
    content: 'Normal Text',
    variant: 'light'
  }
}

export const header: StoryObj<TextProps> = {
  args:{
    content: 'Normal Text',
    variant: 'bold',
    fontSize: 'large'
  }
}

export const Disabled: StoryObj<TextProps> = {
  args: {
    content: 'Disabled Text',
    disabled: true,
  },
};


