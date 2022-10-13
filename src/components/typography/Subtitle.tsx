import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TypographyInterface } from './Typography';

export interface SubtitleProps extends TypographyInterface {
  size?: 's1' | 's2' | 's3' | 's4' | 's5' | 's6';
}

export function Subtitle({
  size = 's1',
  children,
  asChild,
  color = 'primary-light'
}: SubtitleProps) {
  const Behaves = asChild ? Slot : 'span';
  return (
    <Behaves
      className={clsx('font-sans font-bold', {
        // size
        'text-3xl': size === 's1',
        'text-2xl': size === 's2',
        'text-xl': size === 's3',
        'text-lg': size === 's4',
        'text-md': size === 's5',
        'text-sm': size === 's6',
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
