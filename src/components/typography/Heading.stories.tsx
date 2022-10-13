import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum'
  },
  argTypes: {
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio'
      }
    },
    color: {
      options: [
        'accentuated-light',
        'accentuated-dark',
        'primary-light',
        'primary-dark',
        'secondary-light',
        'secondary-dark',
        'alert-positive',
        'alert-negative',
        'alert-warning',
        'alert-informative',
        'white',
        'transparent'
      ],
      control: {
        type: 'select'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'h6'
  }
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'h1'
  }
};
