import { useState, type ChangeEvent } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', defaultValue: false },
    defaultChecked: { control: 'boolean' },
    disabled: { control: 'boolean', defaultValue: false },
    onChange: { control: 'action' },
    className: { control: 'text' },
  },
  decorators: [(Story) => <div className="flex flex-row gap-8">{Story()}</div>],
};

export const Default: Story = {
  args: {
    disabled: false,
    onChange: action('click'),
    checked: false,
  },
};

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };
    return (
      <div className="flex items-center gap-10">
        <Checkbox checked={checked} onChange={handleChange} />
        <span>Basic</span>
      </div>
    );
  },
};

export const DefaultChecked: Story = {
  render: () => (
    <div className="flex items-center gap-10">
      <Checkbox data-testid="test" defaultChecked />
      <span>Default checked</span>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-10">
      <Checkbox disabled defaultChecked />
      <span>Disabled</span>
    </div>
  ),
};

export const CheckboxGroupExample: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['one']} name="test" className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Checkbox value="one" />
        <span>One</span>
      </div>
      <div className="flex items-center gap-10">
        <Checkbox value="two" />
        <span>Two</span>
      </div>
      <div className="flex items-center gap-10">
        <Checkbox value="three" />
        <span>Three</span>
      </div>
    </CheckboxGroup>
  ),
};
export const ControlledCheckboxGroup = () => {
  const [values, setValues] = useState<string[]>(['one', 'two']);

  const handleChange = (values: string[]) => {
    setValues(values);
  };

  return (
    <CheckboxGroup value={values} onChange={handleChange} className="flex flex-col gap-10">
      <div className="flex items-center gap-10">
        <Checkbox value="one" />
        <span>One</span>
      </div>
      <div className="flex items-center gap-10">
        <Checkbox value="two" />
        <span>Two</span>
      </div>
      <div className="flex items-center gap-10">
        <Checkbox value="three" />
        <span>Three</span>
      </div>
    </CheckboxGroup>
  );
};

export const IndeterminateExample = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-10">
        <Checkbox
          checked={allChecked}
          indeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
        />
        <span>Parent Checkbox</span>
      </div>

      <div className="pl-18 flex items-center gap-10">
        <Checkbox
          checked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        />
        <span>Child Checkbox 1</span>
      </div>

      <div className=" pl-18 flex items-center gap-10">
        <Checkbox
          checked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        />
        <span>Child Checkbox 2</span>
      </div>
    </div>
  );
};

export default meta;
