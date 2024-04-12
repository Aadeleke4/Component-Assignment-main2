import { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { HeroProps } from './Hero.types';
import HeroImg from './background2.png'

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<HeroProps>;

export const Primary: StoryObj<HeroProps> = {
  args: {
    src: HeroImg,
    backgroundColor: '#ffffff',
    disabled: false,
  },
};


export const Disabled: StoryObj<HeroProps> = {
  args: {
    src: HeroImg,
    disabled: true,
  },
};
