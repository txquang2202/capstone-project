'use client';

import { useMutation } from '@apollo/client';
import { TextInput } from '@mantine/core';
import React from 'react';

import { UPDATE_COMPANY } from '@/graphql/company';
import useEmptyText from '@/hooks/useEmptyText';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

import { Button } from '../../components/Button';
import { IconX } from '../Icons';
import { TextEditor } from '../TextEditor';

export type UpdateCompanyInput = {
  brief_overview: string;
  company_facebook: string;
  company_name: string;
  company_size: string;
  company_type: string;
  company_website: string;
  country: string;
  id: string;
  ot_policy: string;
  overview: string;
  working_day: string;
};

type UpdateCompanyModalProps = {
  company: UpdateCompanyInput;
  onClose: () => void;
  onUpdate: (data: unknown) => void;
};

type ContentProps = {
  title: string;
  description?: string;
  content: React.ReactNode;
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
    <div className={cn('flex items-start gap-8', className)}>
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

const UpdateCompanyModal = ({
  company,
  onClose,
  onUpdate,
}: UpdateCompanyModalProps) => {
  const handleClose = () => {
    onClose();
  };
  const [updateCompanyMutation] = useMutation(UPDATE_COMPANY);
  const { t } = useLocale();
  const { isEmptyDraftJs } = useEmptyText();

  const { fields, onChangeField, error } = useForm<UpdateCompanyInput>({
    defaultState: {
      brief_overview: '',
      company_name: company.company_name,
      company_website: company.company_website,
      company_facebook: company.company_facebook,
      company_type: company.company_type,
      company_size: company.company_size,
      country: company.country,
      id: company.id,
      ot_policy: company.ot_policy,
      overview: '',
      working_day: company.working_day,
    },
    validate: {
      company_name: ({ value }) => (!value ? 'Tên công ty là bắt buộc' : null),
      overview: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      brief_overview: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
    },
    config: {
      company_name: { required: true },
      overview: { required: true },
      brief_overview: { required: true },
    },
  });

  const handleUpdate = async () => {
    try {
      const overview = fields.overview;
      const brief_overview = fields.brief_overview;
      let overviewContent = '';
      let briefOverviewContent = '';
      if (overview) {
        overviewContent = overview.replace(/<[^>]+>/g, '');
      }
      if (brief_overview) {
        briefOverviewContent = brief_overview.replace(/<[^>]+>/g, '');
      }
      const data = await updateCompanyMutation({
        variables: {
          updateCompanyId: company.id,
          input: {
            company_name: fields.company_name,
            company_website: fields.company_website,
            company_facebook: fields.company_facebook,
            company_type: fields.company_type,
            company_size: fields.company_size,
            country: fields.country,
            overview: overviewContent,
            brief_overview: briefOverviewContent,
            ot_policy: fields.ot_policy,
            working_day: fields.working_day,
          },
        },
      });
      console.log(data);
      onClose();
      onUpdate(data);
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center overflow-y-auto rounded bg-[#000000] bg-opacity-50 p-20 transition-opacity duration-1000'>
      <div className='flex max-h-[calc(100vh-80px)] w-full max-w-screen-lg  flex-col gap-5 overflow-y-auto rounded-lg bg-white p-10'>
        <div className='flex flex-row justify-between '>
          <h2>Update company info</h2>
          <IconX onClick={() => handleClose()} className='cursor-pointer' />
        </div>
        <Content
          title='Company Name'
          content={
            <TextInput
              size='lg'
              placeholder='Company Name'
              className='w-full'
              value={fields.company_name}
              error={error.company_name && t(error.company_name)}
              onChange={(e) => onChangeField('company_name', e.target.value)}
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
              value={fields.company_website}
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
              value={fields.company_facebook}
              onChange={(e) =>
                onChangeField('company_facebook', e.target.value)
              }
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
              value={fields.company_type}
              onChange={(e) => onChangeField('company_type', e.target.value)}
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
              value={fields.company_size}
              onChange={(e) => onChangeField('company_size', e.target.value)}
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
              value={fields.country}
              onChange={(e) => onChangeField('country', e.target.value)}
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
              value={fields.ot_policy}
              onChange={(e) => onChangeField('ot_policy', e.target.value)}
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
              value={fields.working_day}
              onChange={(e) => onChangeField('working_day', e.target.value)}
            />
          }
        />
        <Content
          titleClass='w-full'
          contentClass='w-full'
          title='Overview'
          className='w-full flex-col items-start gap-2'
          content={
            <TextEditor
              error={error.overview}
              onChange={(value) => onChangeField('overview', value)}
              placeholder='Overview'
            />
          }
        />
        <Content
          titleClass='w-full'
          contentClass='w-full'
          title='Brief Overview'
          className='w-full flex-col items-start gap-2'
          content={
            <TextEditor
              error={error.brief_overview}
              onChange={(value) => onChangeField('brief_overview', value)}
              placeholder='Brief Overview'
            />
          }
        />

        <Button size='large' className='mt-2 w-full' onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateCompanyModal;
