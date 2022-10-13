import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Actions/Button',
  component: Button,
  args: {
    tag: 'Lorem',
    size: 'small',
    variant: 'accentuated'
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'big', 'huge'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      options: [true, false],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    iconHover: {
      table: {
        disable: true
      }
    },
    iconDisabled: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    isActive: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium'
  }
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
};

export const Hug: StoryObj<ButtonProps> = {
  args: {
    size: 'huge'
  }
};

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary'
  }
};

export const Primary_Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary-outline'
  }
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary'
  }
};

export const Secondary_Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary-outline'
  }
};

export const Negative: StoryObj<ButtonProps> = {
  args: {
    variant: 'negative'
  }
};

export const Negative_Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'negative-outline'
  }
};

export const Silent: StoryObj<ButtonProps> = {
  args: {
    variant: 'silent'
  }
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
};
