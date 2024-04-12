export interface DropdownProps {
    options: string[];
    label: string;
    backgroundColor?: string;
    disabled?: boolean;
    onSelect?: (option: string) => void;
  }
  