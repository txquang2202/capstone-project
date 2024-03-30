'use client';

import { useMutation } from '@apollo/client';
import { MultiSelect, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { apiGet } from '@/apis/api';
import { routes } from '@/configs/router';
import {
  CREATE_BLOG,
  CreateBlogResponse,
  CreateBlogVariable,
} from '@/graphql/blog';
import useAuthData from '@/hooks/useAuthData';
import useEmptyText from '@/hooks/useEmptyText';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';

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

type AddBlog = {
  user_id: string;
  slug: string;
  title: string;
  time_read: number;
  content: string;
  tag: string[];
};

const AddBlog = () => {
  const { t } = useLocale();
  const { authUser } = useAuthData();
  const [mutate] = useMutation<CreateBlogResponse, CreateBlogVariable>(
    CREATE_BLOG
  );
  const { isEmptyDraftJs } = useEmptyText();
  const router = useRouter();
  const tag = apiGet('/api/blogTag', {}, {});
  console.log('tag', tag);
  const { fields, onChangeField, error, handleSubmit } = useForm<AddBlog>({
    defaultState: {
      user_id: '',
      slug: '',
      tag: [],
      title: '',
      content: '',
      time_read: 0,
    },
    validate: {
      tag: ({ value }) =>
        !(value as string[]).length ? 'Chọn ít nhất 1 tag' : null,
      title: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      content: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
    },
    config: {
      tag: { required: true },
      title: { required: true },
      content: { required: true },
    },
  });

  console.log('authUser', authUser);

  const onSubmit = () => {
    mutate({
      variables: {
        input: {
          user_id: authUser?.id || '9bf98d48-29c9-4fbd-a341-cfe940028e66',
          tag: fields.tag.join(', '),
          title: fields.title,
          content: fields.content,
          slug: fields.slug,
          time_read: 0,
        },
      },
      onCompleted: (data) => {
        router.push(
          routes.adminJobDetail.pathParams({ id: data.createBlog.id })
        );
      },
    });
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
            error={error.title && t(error.title)}
            onChange={(e) => onChangeField('title', e.target.value)}
          />
        }
      />
      <Content
        title='Slug'
        content={
          <TextInput
            size='lg'
            placeholder='title-slug'
            className='w-full'
            error={error.slug && t(error.slug)}
            onChange={(e) => onChangeField('slug', e.target.value)}
          />
        }
      />
      <Content
        title='Tag'
        content={
          <MultiSelect
            size='lg'
            searchable
            placeholder='Tag'
            value={fields.tag}
            data={['Tag', 'Tag 1', 'Tag 2', 'Tag 3']}
            styles={{ inputField: { boxShadow: 'none', paddingLeft: 0 } }}
            onChange={(value) => onChangeField('tag', value)}
            error={error.tag}
          />
        }
      />
      <Content
        titleClass='w-full'
        contentClass='w-full'
        title='Content'
        className='w-full flex-col items-start gap-2'
        content={
          <TextEditor
            error={error.content}
            onChange={(value) => onChangeField('content', value)}
            placeholder='Content'
          />
        }
      />
      <Button
        onClick={() => handleSubmit(onSubmit)}
        size='large'
        className='mt-2 w-full'
      >
        Add Blog
      </Button>
    </div>
  );
};

export default AddBlog;
