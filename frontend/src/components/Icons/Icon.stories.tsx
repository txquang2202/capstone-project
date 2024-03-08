import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react';

import * as Icons from './';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Icons.IconCamera> = {
  title: 'Icon',
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.IconCamera>;

const copyTextToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    alert('Copy failed');
    return;
  }
  const content = `import { ${text} } from '@/components/Icons';`;
  navigator.clipboard.writeText(content).then(
    () => {
      alert('Copy success');
    },
    (err) => {
      alert('Copy failed');
      console.error('Could not copy icon: ', err);
    }
  );
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <span className='text-primary'>Click on icon to copy component</span>
        <div className='mt-8 flex flex-wrap gap-8'>
          {Object.keys(Icons)
            .sort()
            .map((key) => {
              if (['IconProps'].includes(key)) {
                return <Fragment key={key} />;
              }

              const Icon = Icons[key as keyof typeof Icons];

              return (
                <div
                  className='flex h-[80px] w-[160px] cursor-pointer flex-col items-center justify-center rounded-lg border hover:shadow-xl'
                  key={key}
                  role='presentation'
                  onClick={() => copyTextToClipboard(key)}
                >
                  <span className='mb-4'>
                    <Icon />
                  </span>
                  <span className='text-text-secondary text-xs'>{key}</span>
                </div>
              );
            })}
        </div>
      </>
    );
  },
};

export default meta;
