// src/stories/Label/Label.types.ts
export interface LabelProps {
  label: string;
  variants?: 'default' | 'error';  // Assuming 'disabled' was mistakenly considered. Adjust as per actual use.
  errorMessage?: string;
  disabled?: boolean;
}
