import React, { useState } from "react";
import { ContactFormProps } from "./ContactForm.types";

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Determine if the submit button should be disabled
  const isSubmitDisabled = email === "" || phone === "";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSubmitDisabled) {
      onSubmit({ email, phone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
