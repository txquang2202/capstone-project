import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { IconClock } from '../Icons';
import Button from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'other', 'transparent', 'subtle'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xl'],
      defaultValue: 'large',
    },
    variant: {
      control: 'select',
      options: ['button', 'icon', 'icon-button'],
      defaultValue: 'button',
    },
    disabled: { control: 'boolean', defaultValue: false },
    active: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },
    icon: { control: 'text' },
    loading: { control: 'boolean', defaultValue: false },
    href: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  decorators: [(Story) => <div className='flex flex-row gap-8'>{Story()}</div>],
};

export const Default: Story = {
  args: {
    intent: 'primary',
    size: 'large',
    disabled: false,
    children: 'Default',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  render: () => (
    <>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button icon={<IconClock />}>With Icon</Button>
      <Button disabled icon={<IconClock />}>
        With Icon Disabled
      </Button>
    </>
  ),
  args: {
    intent: 'primary',
    size: 'large',
    onClick: action('clicked'),
  },
};

export const Loading: Story = {
  render: () => (
    <>
      <Button loading>Loading</Button>
    </>
  ),
  args: {
    intent: 'primary',
    size: 'large',
    onClick: action('clicked'),
  },
};

export const PrimaryMedium: Story = {
  render: () => (
    <>
      <Button size='medium'>Primary</Button>
      <Button size='medium' disabled>
        Disabled
      </Button>
      <Button icon={<IconClock />} size='medium'>
        With Icon
      </Button>
      <Button icon={<IconClock />} size='medium' disabled>
        With Icon Disabled
      </Button>
    </>
  ),
};

export const Secondary: Story = {
  render: () => (
    <>
      <Button intent='secondary'>Primary</Button>
      <Button intent='secondary' disabled>
        Disabled
      </Button>
      <Button intent='secondary' icon={<IconClock />}>
        With Icon
      </Button>
      <Button intent='secondary' icon={<IconClock />} disabled>
        With Icon Disabled
      </Button>
    </>
  ),
};

export const Other: Story = {
  render: () => (
    <>
      <Button intent='other'>Primary</Button>
      <Button intent='other' disabled>
        Disabled
      </Button>
      <Button intent='other' icon={<IconClock />}>
        With Icon
      </Button>
      <Button intent='other' disabled icon={<IconClock />}>
        With Icon Disabled
      </Button>
    </>
  ),
};

export const Subtle: Story = {
  render: () => (
    <>
      <Button intent='subtle'>Subtle</Button>
      <Button intent='subtle' disabled>
        Disabled
      </Button>
      <Button intent='subtle' icon={<IconClock />}>
        With Icon
      </Button>
      <Button intent='subtle' disabled icon={<IconClock />}>
        With Icon Disabled
      </Button>
    </>
  ),
};

export const Transparent: Story = {
  render: () => (
    <>
      <Button intent='transparent'>Primary</Button>
      <Button intent='transparent' disabled>
        Disabled
      </Button>
      <Button intent='transparent' icon={<IconClock />}>
        With Icon
      </Button>
      <Button intent='transparent' active>
        Active
      </Button>
      <Button intent='transparent' disabled icon={<IconClock />}>
        With Icon Disabled
      </Button>
    </>
  ),
};

export const Icon: Story = {
  render: () => (
    <>
      <Button variant='icon' icon={<IconClock />} />
      <Button variant='icon' active icon={<IconClock />} />
      <Button variant='icon' disabled icon={<IconClock />} />
    </>
  ),
};

export const IconButton: Story = {
  render: () => (
    <>
      <Button variant='icon-button' icon={<IconClock />} />
      <Button variant='icon-button' icon={<IconClock />} disabled />
      <Button variant='icon-button' icon={<IconClock />} intent='secondary' />
      <Button
        variant='icon-button'
        icon={<IconClock />}
        intent='secondary'
        disabled
      />
      <Button variant='icon-button' icon={<IconClock />} intent='other' />
      <Button
        variant='icon-button'
        icon={<IconClock />}
        intent='other'
        disabled
      />
      <Button variant='icon-button' icon={<IconClock />} intent='subtle' />
      <Button
        variant='icon-button'
        icon={<IconClock />}
        intent='subtle'
        disabled
      />
    </>
  ),
};

export const Link: Story = {
  render: () => (
    <>
      <Button href='#'>Primary</Button>
      <Button href='#' disabled>
        Primary
      </Button>
      <Button href='#' intent='secondary'>
        Secondary
      </Button>
      <Button href='#' intent='secondary' disabled>
        Secondary
      </Button>
      <Button href='#' intent='transparent'>
        Transparent
      </Button>
      <Button href='#' intent='transparent' disabled>
        Transparent
      </Button>
      <Button href='#' intent='other'>
        Other
      </Button>
      <Button href='#' intent='other' disabled>
        Other
      </Button>
      <Button href='#' intent='subtle'>
        Subtle
      </Button>
      <Button href='#' intent='subtle' disabled>
        Subtle
      </Button>
    </>
  ),
};

export default meta;
