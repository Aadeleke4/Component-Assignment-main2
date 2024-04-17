import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom";

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
    fireEvent.click(screen.getByRole("button"));

    expect(handleSubmit).toHaveBeenCalledWith({
      email: "test@example.com",
      phone: "1234567890",
    });
  });

  it("should disable submit button if email is empty", () => {
    render(<ContactForm onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should disable submit button if phone is empty", () => {
    render(<ContactForm onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should disable submit button if both email and phone are empty", () => {
    render(<ContactForm onSubmit={() => {}} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should enable submit button when both email and phone are provided", () => {
    render(<ContactForm onSubmit={() => {}} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
