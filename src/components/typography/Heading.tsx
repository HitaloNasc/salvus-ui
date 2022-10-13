import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { TypographyInterface } from './Typography';

export interface HeadingProps extends TypographyInterface {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ size = 'h1', children, asChild, color = 'primary-dark' }: HeadingProps) {
  const Behaves = asChild ? Slot : 'h2';
  return (
    <Behaves
      className={clsx('font-sans font-bold', {
        // size
        'text-4xl': size === 'h1',
        'text-3xl': size === 'h2',
        'text-2xl': size === 'h3',
        'text-xl': size === 'h4',
        'text-lg': size === 'h5',
        'text-md': size === 'h6',
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
