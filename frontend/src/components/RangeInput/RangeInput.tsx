'use client';

import { useMemo } from 'react';

import useUncontrolled from '@/hooks/useUncontrolled';

type Props = {
  step?: number;
  range?: [number, number];
  values?: [number, number];
  defaultValues?: [number, number];
  blockRange?: boolean;
  onChange?: (values: [number, number]) => void;
};

const RangeInput = ({
  step = 500,
  range = [500, 10_000],
  values,
  defaultValues,
  blockRange = true,
  onChange,
}: Props) => {
  const [value, _onChange] = useUncontrolled({
    value: values,
    defaultValue: defaultValues || range,
    onChange,
  });

  const [left, right] = useMemo<[number, number]>(() => {
    const [min, max] = range;
    const _range = max - min;
    const _left = Math.min(value[0], value[1]);
    const _right = Math.max(value[0], value[1]);
    const left = ((_left - min) * 100) / _range;
    const right = ((max - _right) * 100) / _range;
    return [left, right];
  }, [range, value]);

  const handleChange = ([left, right]: [number, number]) => {
    if (left > right && blockRange) return;
    _onChange([left, right]);
  };

  return (
    <div className='range-border ip-4'>
      <div className='range-slider'>
        <span
          className='range-selected'
          data-input-range-target='rangeSelected'
          style={{ left: `${left}%`, right: `${right}%` }}
        ></span>
      </div>
      <div className='range-input'>
        <input
          className='min'
          data-action='change->jobs--counter-filter#changeRange input->input-range#rangeSlide'
          data-input-range-target='input'
          data-jobs--counter-filter-target='min'
          max={range[1]}
          min={range[0]}
          name='salary_ranges[]'
          step={step}
          type='range'
          value={value[0]}
          onChange={(e) => handleChange([+e.target.value, value[1]])}
          data-gtm-form-interact-field-id='0'
        />
        <input
          className='max'
          data-action='change->jobs--counter-filter#changeRange input->input-range#rangeSlide'
          data-input-range-target='input'
          data-jobs--counter-filter-target='max'
          max={range[1]}
          min={range[0]}
          name='salary_ranges[]'
          step={step}
          type='range'
          value={value[1]}
          onChange={(e) => handleChange([value[0], +e.target.value])}
          data-gtm-form-interact-field-id='1'
        />
      </div>
    </div>
  );
};

export default RangeInput;
