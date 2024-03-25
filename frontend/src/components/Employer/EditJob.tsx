'use client';

import { MultiSelect, TextInput } from '@mantine/core';
import { ReactNode, useState } from 'react';

import { JOB_TYPE_TEXT } from '@/constant/job';
import useAuthData from '@/hooks/useAuthData';
import useEmptyText from '@/hooks/useEmptyText';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';
import { formatCurrency } from '@/lib/number';
import { useLocale } from '@/locale';
import { Job, WorkingType } from '@/types/job';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { CustomMultiSelect } from '../CustomMultiSelect';
import { Radio, RadioGroup } from '../Radio';
import { RangeInput } from '../RangeInput';
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

type EditJob = {
  country: string[];
  hide_salary: boolean;
  is_closed: boolean;
  job_description: string;
  name: string;
  salary_from: number;
  salary_to: number;
  skill_demand: string;
  skills: string[];
  top_3_reason: string[];
  unit: string;
  why_you_love_working_here: string;
  working_type: string;
};

const RANGE: Record<
  string,
  {
    unit: string;
    locale: string;
    range: [number, number];
    from: number;
    to: number;
  }
> = {
  VND: {
    unit: 'VND',
    locale: 'vi-VN',
    range: [0, 100_000_000],
    from: 10_000_000,
    to: 20_000_000,
  },
  USD: {
    unit: 'USD',
    locale: 'en',
    range: [0, 200_000],
    from: 1_000,
    to: 2_000,
  },
};

type Props = {
  job: Job;
};

const EditJob = ({ job }: Props) => {
  const { t } = useLocale();
  const { authUser } = useAuthData();
  // const [mutate] = useMutation<CreateJobResponse, CreateJobVariable>(
  //   CREATE_JOB
  // );
  const { isEmptyDraftJs } = useEmptyText();
  // const router = useRouter();
  const [range, setRange] = useState(RANGE.USD);
  const [reasons, setReasons] = useState<string[]>([]);

  const { fields, onChangeField, error, handleSubmit } = useForm<EditJob>({
    defaultState: {
      name: job.name,
      unit: job.unit,
      skills: JSON.parse(job.skills),
      country: job.country.split(','),
      skill_demand: job.skill_demand
        .replace(/<\/li>/g, '\n')
        .replace(/<[^>]+>/g, ''),
      job_description: job.job_description || '',
      why_you_love_working_here: job.why_you_love_working_here,
      is_closed: job.is_closed,
      hide_salary: job.hide_salary,
      salary_from: job.salary_from || range.from,
      salary_to: job.salary_to || range.to,
      top_3_reason: job.top_3_reason
        .split('<li>')
        .slice(1)
        .map((item) => item.split('</li>')[0]),
      working_type: job.working_type,
    },
    validate: {
      country: ({ value }) =>
        !(value as string[]).length ? 'Chọn ít nhất 1 địa điểm' : null,
      top_3_reason: ({ value }) =>
        (value as string[]).length !== 3 ? 'Chọn 3 lý do' : null,
      why_you_love_working_here: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      job_description: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      skill_demand: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
    },
    config: {
      name: { required: true },
      skill_demand: { required: true },
      working_type: { required: true },
      job_description: { required: true },
      why_you_love_working_here: { required: true },
    },
  });

  console.log('authUser', authUser);
  console.log('field', fields);
  console.log('job', job);

  const onSubmit = () => {
    // mutate({
    //   variables: {
    //     input: {
    //       company_id:
    //         job.company_id,
    //       country: fields.country.join(', '),
    //       hide_salary: fields.hide_salary,
    //       is_closed: false,
    //       job_description: fields.job_description,
    //       name: fields.name,
    //       salary_from: fields.salary_from,
    //       salary_to: fields.salary_to,
    //       skill_demand: fields.skill_demand,
    //       skills: JSON.stringify(fields.skills),
    //       top_3_reason:
    //         '<ul>' +
    //         fields.top_3_reason
    //           .map((content) => `<li>${content}</li>`)
    //           .join('') +
    //         '</ul>',
    //       unit: fields.unit,
    //       why_you_love_working_here: fields.why_you_love_working_here,
    //       working_type: fields.working_type,
    //     },
    //   },
    //   onCompleted: (data) => {
    //     router.push(
    //       routes.employerJobDetail.pathParams({ id: data.createJob.id })
    //     );
    //   },
    // });
  };

  return (
    <div className='flex flex-col gap-5 p-10'>
      <Content
        title='Title'
        content={
          <TextInput
            size='lg'
            placeholder='Title'
            className='w-full'
            error={error.name && t(error.name)}
            value={fields.name}
            onChange={(e) => onChangeField('name', e.target.value)}
          />
        }
      />
      <Content
        title='Skills'
        required={false}
        content={
          <MultiSelect
            size='lg'
            searchable
            placeholder='Skill'
            value={fields.skills}
            data={['React', 'Angular', 'Vue', 'Svelte']}
            styles={{ inputField: { boxShadow: 'none', paddingLeft: 0 } }}
            onChange={(value) => onChangeField('skills', value)}
          />
        }
      />
      <Content
        title='Locations'
        content={
          <MultiSelect
            size='lg'
            searchable
            placeholder='Locations'
            value={fields.country}
            data={['Ho Chi Minh', 'Ha Noi', 'Da Nang', 'Other']}
            styles={{ inputField: { boxShadow: 'none', paddingLeft: 0 } }}
            onChange={(value) => onChangeField('country', value)}
            error={error.country}
          />
        }
      />
      <Content
        title='Working types'
        content={
          <RadioGroup
            value={fields.working_type}
            onChange={(value) => onChangeField('working_type', value)}
            className='flex items-center gap-8'
          >
            {[WorkingType.AtOffice, WorkingType.Hybrid, WorkingType.Remote].map(
              (type) => (
                <div key={type} className='flex items-center gap-2'>
                  <Radio value={type} />
                  <div>{t(JOB_TYPE_TEXT[type])}</div>
                </div>
              )
            )}
          </RadioGroup>
        }
      />
      <Content
        className='items-start'
        title='Top 3 reasons to join us'
        content={
          <CustomMultiSelect
            size='lg'
            searchable
            placeholder='Top 3 reasons to join us'
            value={fields.top_3_reason}
            data={reasons}
            onChange={(value) => onChangeField('top_3_reason', value)}
            styles={{ inputField: { boxShadow: 'none', paddingLeft: 0 } }}
            error={error.top_3_reason}
            onChangeData={setReasons}
          />
        }
      />
      <Content
        title='Salary'
        className='items-start'
        description={`${formatCurrency(
          fields.salary_from,
          fields.unit,
          range.locale
        )} - ${formatCurrency(fields.salary_to, fields.unit, range.locale)}`}
        content={
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <div className='flex-1'>
                <RangeInput
                  onChange={(value) => {
                    onChangeField('salary_from', value[0]);
                    onChangeField('salary_to', value[1]);
                  }}
                  values={[fields.salary_from, fields.salary_to]}
                  range={range.range}
                />
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox
                  checked={!fields.hide_salary}
                  onChange={(e) =>
                    onChangeField('hide_salary', !e.target.checked)
                  }
                />
                Hiện thị lương
              </div>
            </div>
            <RadioGroup
              value={fields.unit}
              onChange={(value) => {
                const range = RANGE[value];
                setRange(range);
                onChangeField('unit', value);
                onChangeField('salary_from', range.from);
                onChangeField('salary_to', range.to);
              }}
              className='flex items-center gap-8'
            >
              {['VND', 'USD'].map((type) => (
                <div key={type} className='flex items-center gap-2'>
                  <Radio value={type} />
                  <div>{type}</div>
                </div>
              ))}
            </RadioGroup>
          </div>
        }
      />
      <Content
        titleClass='w-full'
        contentClass='w-full'
        title='Job description'
        className='w-full flex-col items-start gap-2'
        content={
          <TextEditor
            error={error.job_description}
            onChange={(value) => onChangeField('job_description', value)}
            placeholder='Job description'
          />
        }
      />
      <Content
        titleClass='w-full'
        contentClass='w-full'
        title='Your skills and experience'
        className='w-full flex-col items-start gap-2'
        content={
          <TextEditor
            error={error.skill_demand}
            onChange={(value) => onChangeField('skill_demand', value)}
            placeholder='Your skills and experience'
          />
        }
      />
      <Content
        titleClass='w-full'
        contentClass='w-full'
        title="Why you'll love working here"
        className='w-full flex-col items-start gap-2'
        content={
          <TextEditor
            error={error.why_you_love_working_here}
            onChange={(value) =>
              onChangeField('why_you_love_working_here', value)
            }
            placeholder="Why you'll love working here"
          />
        }
      />
      <Button
        onClick={() => handleSubmit(onSubmit)}
        size='large'
        className='mt-2 w-full'
      >
        Edit Job
      </Button>
    </div>
  );
};

export default EditJob;
