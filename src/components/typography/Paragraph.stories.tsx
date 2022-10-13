import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
  args: {
    children: 'Lorem Ipsum',
    color: 'primary-dark',
    size: 'p1'
  },
  argTypes: {
    size: {
      options: ['p1', 'p2', 'p3'],
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
} as Meta<ParagraphProps>;

export const Default: StoryObj<ParagraphProps> = {};

export const Small: StoryObj<ParagraphProps> = {
  args: {
    size: 'p3'
  }
};

export const Large: StoryObj<ParagraphProps> = {
  args: {
    size: 'p1'
  }
};

export const Negative: StoryObj<ParagraphProps> = {
  args: {
    color: 'alert-negative'
  }
};

export const Positive: StoryObj<ParagraphProps> = {
  args: {
    color: 'alert-positive'
  }
};

export const Warning: StoryObj<ParagraphProps> = {
  args: {
    color: 'alert-warning'
  }
};

export const Informative: StoryObj<ParagraphProps> = {
  args: {
    color: 'alert-informative'
  }
};
