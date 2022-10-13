import { Meta, StoryObj } from '@storybook/react';
import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Components/Typography/Subtitle',
  component: Subtitle,
  args: {
    children: 'Lorem Ipsum',
    color: 'primary-light',
    size: 's1'
  },
  argTypes: {
    size: {
      options: ['s1', 's2', 's3', 's4', 's5', 's6'],
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
} as Meta<SubtitleProps>;

export const Default: StoryObj<SubtitleProps> = {};

export const Small: StoryObj<SubtitleProps> = {
  args: {
    size: 's6'
  }
};

export const Large: StoryObj<SubtitleProps> = {
  args: {
    size: 's1'
  }
};
