import ContactForm from "./ContactForm";
import { Story, Meta } from "@storybook/react";
import { ContactFormProps } from "./ContactForm.types";

export default {
  title: "ContactForm",
  component: ContactForm,
  argTypes: { onSubmit: { action: "submitted" } }, // Ensures Storybook logs the submit action
} as Meta<ContactFormProps>;

const Template: Story<ContactFormProps> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => console.log("Form data:", data), // Provide a mock function for onSubmit
};
