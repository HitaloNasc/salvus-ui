import { ReactNode } from 'react';

export interface TypographyInterface {
  color?:
    | 'accentuated-light'
    | 'accentuated-dark'
    | 'primary-light'
    | 'primary-dark'
    | 'secondary-light'
    | 'secondary-dark'
    | 'alert-positive'
    | 'alert-negative'
    | 'alert-warning'
    | 'alert-informative'
    | 'white'
    | 'transparent';
  children: ReactNode;
  asChild?: boolean;
}
