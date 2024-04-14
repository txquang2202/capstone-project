'use client';

import { useMutation } from '@apollo/client';
import { TextInput } from '@mantine/core';
import { ReactNode } from 'react';

import { CREATE_COMPANY } from '@/graphql/company';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';

import { Button } from '../Button';
import { TextEditor } from '../TextEditor';

type ContentProps = {
  title: string;
  description?: string;
  content: ReactNode;
  className?: string;
  titleClass?: string;
  contentClass?: string;
  required?: boolean;
};

const Content = ({
  title,
  description,
  className,
  titleClass,
  contentClass,
  content,
  required = true,
}: ContentProps) => {
  return (
    <div className={cn('flex items-center gap-8', className)}>
      <div className={cn('w-[220px]', titleClass)}>
        <div className='text-lg font-bold'>
          {title}
          {required && <span className='text-primary'>*</span>}
        </div>
        {description && (
          <div className='text-rich-grey mt-2'>{description}</div>
        )}
      </div>
      <div className={cn('flex-1', contentClass)}>{content}</div>
    </div>
  );
};

type CompanyInput = {
  company_name: string;
  company_type: string;
  country: string;
  working_day: string;
  ot_policy: string;
  company_size: string;
  overview: string;
  company_website: string;
  company_facebook: string;
  brief_overview: string;
  address: string;
};

const AddCompany = () => {
  const [createCompany] = useMutation(CREATE_COMPANY);
  const { fields, onChangeField, handleSubmit } = useForm<CompanyInput>({
    defaultState: {
      company_name: '',
      company_type: '',
      country: '',
      working_day: '',
      ot_policy: '',
      company_size: '',
      overview: '',
      company_website: '',
      company_facebook: '',
      brief_overview: '',
      address: '',
    },
  });
  const onSubmit = async () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(fields.overview, 'text/html');
      const textContent = doc.body.textContent || '';

      const response = await createCompany({
        variables: {
          input: {
            ...fields,
            overview: textContent,
          },
        },
      });

      alert('Company successfully created!');
      console.log(response.data);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        alert('Please check your input fields');
      }
    }
  };

  return (
    <div className='flex flex-col gap-5 p-10'>
      <Content
        title='Company Name'
        content={
          <TextInput
            size='lg'
            placeholder='Company Name'
            className='w-full'
            onChange={(e) => onChangeField('company_name', e.target.value)}
          />
        }
      />
      <Content
        title='Company Type'
        content={
          <TextInput
            size='lg'
            placeholder='Company Type'
            className='w-full'
            onChange={(e) => onChangeField('company_type', e.target.value)}
          />
        }
      />
      <Content
        title='Country'
        content={
          <TextInput
            size='lg'
            placeholder='Country'
            className='w-full'
            onChange={(e) => onChangeField('country', e.target.value)}
          />
        }
      />
      <Content
        title='Working Day'
        content={
          <TextInput
            size='lg'
            placeholder='Working Day'
            className='w-full'
            onChange={(e) => onChangeField('working_day', e.target.value)}
          />
        }
      />

      <Content
        title='OT Policy'
        content={
          <TextInput
            size='lg'
            placeholder='OT Policy'
            className='w-full'
            onChange={(e) => onChangeField('ot_policy', e.target.value)}
          />
        }
      />

      <Content
        title='Company Size'
        content={
          <TextInput
            size='lg'
            placeholder='Company Size'
            className='w-full'
            onChange={(e) => onChangeField('company_size', e.target.value)}
          />
        }
      />

      <Content
        title='Company Website'
        content={
          <TextInput
            size='lg'
            placeholder='Company Website'
            className='w-full'
            onChange={(e) => onChangeField('company_website', e.target.value)}
          />
        }
      />

      <Content
        title='Company Facebook'
        content={
          <TextInput
            size='lg'
            placeholder='Company Facebook'
            className='w-full'
            onChange={(e) => onChangeField('company_facebook', e.target.value)}
          />
        }
      />

      <Content
        title='Brief Overview  (10 - 80 characaters required)'
        content={
          <TextInput
            size='lg'
            placeholder='Brief Overview'
            className='w-full'
            onChange={(e) => onChangeField('brief_overview', e.target.value)}
          />
        }
      />

      <Content
        title='Address'
        content={
          <TextInput
            size='lg'
            placeholder='Address'
            className='w-full'
            onChange={(e) => onChangeField('address', e.target.value)}
          />
        }
      />

      <Content
        title='Overview (10 - 80 characaters required)'
        content={
          <TextEditor
            placeholder='Overview'
            onChange={(value) => onChangeField('overview', value)}
          />
        }
      />
      <Button
        onClick={() => handleSubmit(onSubmit)}
        size='large'
        className='mt-2 w-full'
      >
        Add Company
      </Button>
    </div>
  );
};

export default AddCompany;
