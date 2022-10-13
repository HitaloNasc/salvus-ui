import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ActionsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'big' | 'huge';
  // eslint-disable-next-line @typescript-eslint/ban-types
  value?: number | string;
  disabled?: boolean;
  children?: ReactNode;
  isActive?: boolean;
  asChild?: boolean;
}
