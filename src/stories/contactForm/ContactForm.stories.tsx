import { Meta, Story } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ContactForm from "./ContactForm";
import { ContactFormProps } from "./ContactForm.types";

export default {
  title: "ContactForm",
  component: ContactForm,
  argTypes: {
    onSubmit: { action: "submitted" }, // Ensures Storybook logs the submit action
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"], // Adjust selector as needed
    },
  },
} as Meta<ContactFormProps>;

const Template: Story<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => console.log("Form data:", data), // Provide a mock function for onSubmit
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByLabelText(/email/i);
  const phoneInput = canvas.getByLabelText(/phone/i);
  const submitButton = canvas.getByRole("button", { name: /submit/i });

  // Initially, the submit button should be disabled
  await expect(submitButton).toBeDisabled();

  // Type into the email field
  await userEvent.type(emailInput, "test@example.com");
  await expect(emailInput).toHaveValue("test@example.com");

  // Type into the phone field
  await userEvent.type(phoneInput, "1234567890");
  await expect(phoneInput).toHaveValue("1234567890");

  // After inputting valid data, the submit button should be enabled
  await expect(submitButton).not.toBeDisabled();

  // Click the submit button
  await userEvent.click(submitButton);
};
