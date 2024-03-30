import { Modal } from '@mantine/core';
import { useMemo } from 'react';

import { COMPANY_TYPES, LEVELS, RANGE, WORKING_TYPES } from '@/constant/global';
import { useForm } from '@/hooks/useForm';
import { formatCurrency } from '@/lib/number';

import { Button } from '../Button';
import CheckButton from '../ProfilePage/CheckButton';
import { Radio, RadioGroup } from '../Radio';
import { RangeInput } from '../RangeInput';

export type Filter = {
  workingType?: number[];
  companyType?: number[];
  salaryFrom?: number;
  salaryTo?: number;
  level?: number[];
  unit?: string;
};

type Props = {
  filter: Filter;
  opened: boolean;
  onClose: () => void;
  onChange: (filter: Props['filter']) => void;
};

const defaultValue = {
  level: [],
  unit: RANGE.USD.unit,
  workingType: [],
  companyType: [],
  salaryTo: RANGE.USD.to,
  salaryFrom: RANGE.USD.from,
};

const FilterModal = ({ filter, onChange, opened, onClose }: Props) => {
  const { fields, onChangeField, reset } = useForm({
    defaultState: {
      ...defaultValue,
      ...filter,
    },
  });
  const range = RANGE[fields.unit];

  const handleSubmit = () => {
    onChange(fields);
    onClose();
  };

  const handleReset = () => {
    onClose();
    onChange({});
    reset();
  };

  const count = useMemo(() => {
    return (
      fields.companyType.length +
      fields.workingType.length +
      fields.level.length
    );
  }, [fields]);

  return (
    <Modal
      centered
      title='Filter'
      classNames={{
        title: 'font-bold text-[22px]',
        header: 'border-b border-silver-grey px-8 py-4',
        body: 'p-0',
      }}
      opened={opened}
      onClose={onClose}
      size='xl'
      closeButtonProps={{ size: 32 }}
    >
      <div className='flex flex-col gap-8 p-8'>
        <div className='flex flex-col gap-3'>
          <div className='font-semibold'>Level</div>
          <div className='flex flex-wrap gap-3'>
            <CheckButton
              value={fields.level}
              onChange={(value) => onChangeField('level', value)}
              className='text-black'
              types={LEVELS}
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='font-semibold'>Salary</div>
          <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <div>{`${formatCurrency(
                fields.salaryFrom,
                fields.unit,
                range.locale
              )} - ${formatCurrency(
                fields.salaryTo,
                fields.unit,
                range.locale
              )}`}</div>
            </div>
            <div className='border-silver-grey ml-auto w-2/3 rounded-full border p-4'>
              <RangeInput
                step={range.step}
                onChange={(value) => {
                  onChangeField('salaryFrom', value[0]);
                  onChangeField('salaryTo', value[1]);
                }}
                values={[fields.salaryFrom, fields.salaryTo]}
                range={range.range}
              />
            </div>
          </div>
          <RadioGroup
            value={fields.unit}
            onChange={(value) => {
              const range = RANGE[value];
              onChangeField('unit', value);
              onChangeField('salaryFrom', range.from);
              onChangeField('salaryTo', range.to);
            }}
            className='flex w-full items-center gap-8'
          >
            {['VND', 'USD'].map((type) => (
              <div key={type} className='flex items-center gap-2'>
                <Radio value={type} />
                <div>{type}</div>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='font-semibold'>Company Type</div>
          <div className='flex flex-wrap gap-3'>
            <CheckButton
              value={fields.companyType}
              onChange={(value) => onChangeField('companyType', value)}
              className='text-black'
              types={COMPANY_TYPES}
            />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='font-semibold'>Working Model</div>
          <div className='flex flex-wrap gap-3'>
            <CheckButton
              value={fields.workingType}
              onChange={(value) => onChangeField('workingType', value)}
              className='text-black'
              types={WORKING_TYPES}
            />
          </div>
        </div>
      </div>
      <div className='border-silver-grey flex items-center justify-between border-t px-8 py-4'>
        <Button
          onClick={handleReset}
          intent='transparent'
          className='text-hyperlink hover:!text-hyperlink px-0'
        >
          Reset filter {count ? `(${count})` : ''}
        </Button>
        <Button onClick={handleSubmit} size='large' className='w-[180px]'>
          Apply
        </Button>
      </div>
    </Modal>
  );
};

export default FilterModal;
