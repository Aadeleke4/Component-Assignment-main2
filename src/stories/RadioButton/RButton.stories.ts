import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import RadioButton from './RButton';
import { RadioButtonProps } from './RButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
    disabled: { control: 'boolean' },
    onChange: { action: 'checked' },
  },
} as Meta<RadioButtonProps>;

export const Primary: StoryObj<RadioButtonProps> = {
  args: {
    label: "Option 1",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio', { name: 'Option 1' });
    await userEvent.click(radioButton); // Simulate clicking the radio button
    await expect(radioButton).toBeChecked(); // Verify that the radio button is checked
  }
};

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    label: "Disabled Option",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButton = canvas.getByRole('radio', { name: 'Disabled Option' });
    await userEvent.click(radioButton); // Attempt to click the disabled radio button
    await expect(radioButton).not.toBeChecked(); // Verify that the radio button is not checked
    await expect(radioButton).toBeDisabled(); // Verify that the radio button is disabled
  }
};
