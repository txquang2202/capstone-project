import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Radio from './Radio';
import RadioGroup from './RadioGroup/RadioGroup';

type Story = StoryObj<typeof Radio>;

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  tags: ['autodocs'],
  component: Radio,
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'small',
    },
    disabled: { control: 'boolean', defaultValue: false },
    className: { control: 'text' },
    onChange: { action: 'click' },
  },
  decorators: [(Story) => <div className='flex flex-row gap-8'>{Story()}</div>],
};

export const Default: Story = {
  args: {
    checked: false,
    size: 'small',
    disabled: false,
    onChange: action('clicked'),
  },
};

export const Basic: Story = {
  render: () => (
    <div className='flex items-center gap-10'>
      <Radio />
      <span>Basic</span>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className='flex items-center gap-10'>
      <Radio disabled checked />
      <span>Disabled</span>
    </div>
  ),
};

export const DefaultChecked: Story = {
  render: () => (
    <div className='flex items-center gap-10'>
      <Radio checked />
      <span>Default checked</span>
    </div>
  ),
};

export const RadioGroupControlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('Option 1');
    return (
      <RadioGroup
        name='Radio Group'
        value={value}
        onChange={setValue}
        className='flex flex-col gap-10'
      >
        <div className='flex items-center gap-10'>
          <Radio value='Option 1' />
          <span>Option 1</span>
        </div>
        <div className='flex items-center gap-10'>
          <Radio value='Option 2' />
          <span>Option 2</span>
        </div>
        <div className='flex items-center gap-10'>
          <Radio value='Option 3' />
          <span>Option 3</span>
        </div>
      </RadioGroup>
    );
  },
};

export const RadioGroupUncontrolled: Story = {
  render: () => {
    return (
      <RadioGroup
        name='Radio Group'
        defaultValue='Option 2'
        className='flex flex-col gap-10'
      >
        <div className='flex items-center gap-10'>
          <Radio value='Option 1' />
          <span>Option 1</span>
        </div>
        <div className='flex items-center gap-10'>
          <Radio value='Option 2' />
          <span>Option 2</span>
        </div>
        <div className='flex items-center gap-10'>
          <Radio value='Option 3' />
          <span>Option 3</span>
        </div>
      </RadioGroup>
    );
  },
};

export const DisabledRadioGroup: Story = {
  render: () => (
    <RadioGroup
      disabled
      defaultValue='Option 1'
      className='flex flex-col gap-10'
    >
      <div className='flex items-center gap-10'>
        <Radio value='Option 1' />
        <span>Option 1</span>
      </div>
      <div className='flex items-center gap-10'>
        <Radio value='Option 2' />
        <span>Option 2</span>
      </div>
      <div className='flex items-center gap-10'>
        <Radio value='Option 3' />
        <span>Option 3</span>
      </div>
    </RadioGroup>
  ),
};

export default meta;
