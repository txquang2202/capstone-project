// components/YourComponent.tsx
import React, { useEffect, useState } from 'react';

import { IconCheck, IconPlus } from '@/components/Icons';
import { cn } from '@/lib/classNames';

import { Button } from '../Button';

interface Button {
  id: number;
  text: string;
}

interface Props {
  defaultValue?: number[];
  value?: number[];
  types: Button[];
  className?: string;
  onChange?: (newValue: number[]) => void;
}

const CheckButton: React.FC<Props> = ({
  defaultValue = [],
  value,
  types,
  className,
  onChange,
}) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>(
    value || defaultValue
  ); // Thay đổi từ string sang number

  useEffect(() => {
    if (!value) return;
    setSelectedButtons(value);
  }, [value]);

  const handleClick = (id: number) => {
    if (selectedButtons.includes(id)) {
      const newValue = selectedButtons.filter((item) => item !== id);
      setSelectedButtons(newValue);
      onChange?.(newValue);
    } else {
      const newValue = [...selectedButtons, id];
      setSelectedButtons([...selectedButtons, id]);
      onChange?.(newValue);
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
            className,
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
