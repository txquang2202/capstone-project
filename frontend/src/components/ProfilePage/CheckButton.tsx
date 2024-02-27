// components/YourComponent.tsx
import React, { useState } from 'react';

import { IconCheck, IconPlus } from '@/components/Icons';
import { cn } from '@/lib/classNames';

import { Button } from '../Button';

interface Button {
  id: number;
  text: string;
}

interface Props {
  types: Button[];
}

const CheckButton: React.FC<Props> = ({ types }) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]); // Thay đổi từ string sang number

  const handleClick = (id: number) => {
    if (selectedButtons.includes(id)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== id));
    } else {
      setSelectedButtons([...selectedButtons, id]);
    }
  };

  const isSelected = (id: number) => {
    return selectedButtons.includes(id);
  };

  return (
    <>
      {types.map((type, index) => (
        <Button
          key={index}
          intent='subtle'
          className={cn(
            'h-10 gap-x-2 rounded-full transition duration-300',
            {
              'border-1 text-dark-grey border-dark-grey': !isSelected(type.id),
            },
            { 'bg-light-red border-red text-red': isSelected(type.id) }
          )}
          onClick={() => handleClick(type.id)}
        >
          {type.text}
          {isSelected(type.id) ? <IconCheck /> : <IconPlus />}
        </Button>
      ))}
    </>
  );
};

export default CheckButton;
