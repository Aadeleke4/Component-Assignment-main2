
import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import reactImage from './React.png';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  tags:['autodocs'],
  argTypes:{
    backgroundColor: {control:'color'},
    text: {control:'text'},
    disabled: {control: 'boolean'}
  }
} as Meta;


export const Primary: StoryObj<CardProps> ={
  args: {
    defaultImage: reactImage,  

  },
};


export const Disabled: StoryObj<CardProps> ={
  args: {
    defaultImage: reactImage,   
    disabled: true,

  },
};
