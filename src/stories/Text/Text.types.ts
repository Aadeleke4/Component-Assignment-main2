export type FontSize = 'small' | 'medium' | 'large'; 

export interface TextProps {
  variant?: 'normal' | 'bold' | 'light';
  content: string;
  fontSize?: FontSize;
  disabled?: boolean;
}
