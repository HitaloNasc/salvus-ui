import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TypographyInterface } from './Typography';

export interface ParagraphProps extends TypographyInterface {
  size?: 'p1' | 'p2' | 'p3';
}

export function Paragraph({
  size = 'p1',
  children,
  asChild,
  color = 'primary-dark'
}: ParagraphProps) {
  const Behaves = asChild ? Slot : 'p';
  return (
    <Behaves
      className={clsx('font-sans m-1', {
        // size
        'text-sm': size === 'p1',
        'text-xs': size === 'p2',
        'text-2xs': size === 'p3',
        // color
        'text-accentuated-light': color === 'accentuated-light',
        'text-accentuated-dark': color === 'accentuated-dark',
        'text-primary-light': color === 'primary-light',
        'text-primary-dark': color === 'primary-dark',
        'text-secondary-light': color === 'secondary-light',
        'text-secondary-dark': color === 'secondary-dark',
        'text-alert-positive': color === 'alert-positive',
        'text-alert-negative': color === 'alert-negative',
        'text-alert-warning': color === 'alert-warning',
        'text-alert-informative': color === 'alert-informative',
        'text-white': color === 'white',
        'text-transparent': color === 'transparent'
      })}
    >
      {children}
    </Behaves>
  );
}
