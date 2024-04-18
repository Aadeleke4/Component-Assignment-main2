import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'array' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onSelect: { action: 'selected' },
  },
} as Meta<DropdownProps>;

export const Primary: StoryObj<DropdownProps> = {
  args: {
    label: 'Choose an option',
    options: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownButton = await canvas.findByText('Select'); // Changed to find by text
    await userEvent.click(dropdownButton);
    const option = await canvas.findByText('Option 1');
    await userEvent.click(option);
    expect(option).toHaveTextContent('Option 1');
  },
};

export const Disabled: StoryObj<DropdownProps> = {
  args: {
    label: 'Disabled Dropdown',
    options: ['Option 1', 'Option 2', 'Option 3'],
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownButton = await canvas.findByText('Select'); // Assuming button text is 'Select'
    await userEvent.click(dropdownButton);
    expect(dropdownButton).toBeDisabled();
    expect(canvas.queryByText('Option 1')).not.toBeInTheDocument();
  },
};
