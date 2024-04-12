export interface ButtonProps {
  variant?: 'dark' | 'light';
  label?: string;
  backgroundColor?: string;
  disabled?: boolean;
  onClick?: () => void;
}
