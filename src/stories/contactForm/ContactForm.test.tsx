import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  it("should submit form with email and phone", () => {
    const handleSubmit = jest.fn();
    render(<ContactForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.submit(screen.getByRole("button"));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      phone: "1234567890",
    });
  });
});
