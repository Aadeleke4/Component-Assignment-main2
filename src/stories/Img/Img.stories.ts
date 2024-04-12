import { Meta, StoryObj } from '@storybook/react';
import { Image } from './Img';
import { ImageProps } from './Img.types';
import Balenzi from './Balenzi.png'

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<ImageProps>;

export const Primary: StoryObj<ImageProps> = {
  args: {
    src: Balenzi,
    backgroundColor: '#ffffff',
    disabled: false,
  },
};


export const Disabled: StoryObj<ImageProps> = {
  args: {
    src: Balenzi,
    disabled: true,
  },
};
