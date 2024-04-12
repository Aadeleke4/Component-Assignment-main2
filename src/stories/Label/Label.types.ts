export interface LabelProps {
  label: string;
  variants: 'default' | 'disabled' | 'error';
  errorMessage?: string;
  disabled?: boolean;

}
