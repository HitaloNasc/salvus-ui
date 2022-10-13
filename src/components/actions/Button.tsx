import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ActionsInterface } from './Actions';

export interface ButtonProps extends ActionsInterface {
  tag?: string | ReactNode;
  icon?: string;
  iconHover?: string;
  iconDisabled?: string;
  variant?:
    | 'accentuated'
    | 'accentuated-outline'
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'negative'
    | 'negative-outline'
    | 'silent';
}

export function Button(props: ButtonProps) {
  const {
    tag,
    //   icon,
    //   iconHover,
    //   iconDisabled,
    size = 'small',
    variant = 'accentuated',
    onClick,
    value,
    disabled,
    children,
    asChild,
    ...rest
  } = props;

  function setVariantStyle(variantName: string) {
    let style: string[] = [];

    // apply disabled style
    if (disabled) {
      return [
        'text-primary-light',
        'hover:text-primary-light',
        'bg-secondary-light',
        'hover:bg-secondary-light',
        'border-none'
      ];
    }

    if (variantName === 'accentuated')
      style = [
        'text-white',
        'hover:text-white',
        'border-accentuated-light',
        'hover:border-accentuated-dark',
        'bg-accentuated-light',
        'hover:bg-accentuated-dark'
      ];

    if (variantName === 'accentuated-outline')
      style = [
        'text-accentuated-light',
        'hover:text-white',
        'border-accentuated-light',
        'hover:border-accentuated-light',
        'bg-white',
        'hover:bg-accentuated-light'
      ];

    if (variantName === 'primary')
      style = [
        'text-white',
        'hover:text-white',
        'border-primary-light',
        'hover:border-primary-dark',
        'bg-primary-light',
        'hover:bg-primary-dark'
      ];

    if (variantName === 'primary-outline')
      style = [
        'text-primary-light',
        'hover:text-white',
        'border-primary-light',
        'hover:border-primary-light',
        'bg-primary-white',
        'hover:bg-primary-light'
      ];

    if (variantName === 'secondary')
      style = [
        'text-primary-light',
        'hover:text-primary-light',
        'border-secondary-light',
        'hover:border-secondary-dark',
        'bg-secondary-light',
        'hover:bg-secondary-dark'
      ];

    if (variantName === 'secondary-outline')
      style = [
        'text-primary-light',
        'hover:text-primary-light',
        'border-secondary-light',
        'hover:border-secondary-light',
        'bg-white',
        'hover:bg-secondary-light'
      ];

    if (variantName === 'negative')
      style = [
        'text-white',
        'hover:text-alert-negative',
        'border-alert-negative',
        'hover:border-alert-negative',
        'bg-alert-negative',
        'hover:bg-white'
      ];

    if (variantName === 'negative-outline')
      style = [
        'text-alert-negative',
        'hover:text-white',
        'border-alert-negative',
        'hover:border-alert-negative',
        'bg-white',
        'hover:bg-alert-negative'
      ];

    if (variantName === 'silent')
      style = [
        'text-primary-light',
        'hover:text-primary-light',
        'border-transparent',
        'hover:border-secondary-light',
        'bg-transparent',
        'hover:bg-secondary-light',
        'underline'
      ];

    return style;
  }

  const Behaves = asChild ? Slot : 'button';
  return (
    <Behaves
      className={clsx(
        'font-sans rounded-lg border-solid border-2 py-0 m-0 upperif(variantName === gap-1 ' +
          setVariantStyle(variant).join(' '),
        {
          // height
          'h-8': size === 'small',
          'h-9': size === 'medium',
          'h-10': size === 'big',
          'h-11': size === 'huge',

          // text
          'text-2xs': size === 'small',
          'text-xs': size === 'medium',
          'text-sm': size === 'big',
          'text-md': size === 'huge',

          // padding-x
          'px-[17px]': size === 'small',
          'px-[19px]': size === 'medium',
          'px-[21px]': size === 'big',
          'px-[24px]': size === 'huge'
        }
      )}
      onClick={onClick}
      value={value}
      disabled={disabled}
      {...rest}
    >
      {children ? children : tag ? tag : ''}
    </Behaves>
  );
}
