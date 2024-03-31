'use client';

import { MultiSelect, type MultiSelectProps } from '@mantine/core';
import { useState } from 'react';

import { cn } from '@/lib/classNames';

import { IconPlus } from '../Icons';

type Props = MultiSelectProps & {
  onChangeData: (data: string[]) => void;
};

const CustomMultiSelect = (props: Props) => {
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    props.onChangeData([...((props.data as string[]) || []), search]);
  };

  return (
    <MultiSelect
      {...props}
      onSearchChange={setSearch}
      nothingFoundMessage={
        <div
          onClick={handleAdd}
          className={cn(
            'text-primary flex cursor-pointer items-center justify-center gap-2',
            { 'text-silver-grey pointer-events-none': !search.trim().length }
          )}
        >
          <IconPlus /> Add Location
        </div>
      }
    />
  );
};

export default CustomMultiSelect;
