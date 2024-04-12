// ContactForm.types.tsx
export interface ContactFormProps {
  onSubmit: (data: { email: string; phone: string }) => void;
}
