'use client';

import { MultiSelect, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { apiPost } from '@/apis/api';
import { routes } from '@/configs/router';
import useAuthData from '@/hooks/useAuthData';
import useEmptyText from '@/hooks/useEmptyText';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';
import { Blog, Tag } from '@/types/blog';

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
  content: string;
  tag_ids: string[];
};

type AddBlogProps = {
  tags: Tag[];
};

const AddBlog = (props: AddBlogProps) => {
  const { t } = useLocale();
  const { authUser } = useAuthData();
  const { isEmptyDraftJs } = useEmptyText();
  const router = useRouter();
  const { fields, onChangeField, error, handleSubmit } = useForm<AddBlog>({
    defaultState: {
      user_id: '',
      slug: '',
      tag_ids: [],
      title: '',
      content: '',
    },
    validate: {
      tag_ids: ({ value }) =>
        !(value as string[]).length ? 'Chọn ít nhất 1 tag' : null,
      title: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      content: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
      slug: ({ value }) =>
        isEmptyDraftJs(value as string) ? 'Thông tin bắt buộc' : null,
    },
    config: {
      tag_ids: { required: true },
      title: { required: true },
      content: { required: true },
      slug: { required: true },
    },
  });
  const tagsData = (
    props.tags || [{ tag_id: 'Loading...', tag_name: 'Loading...' }]
  ).map((tag) => ({
    value: tag.id,
    label: tag.tag_name,
  }));
  const onSubmit = () => {
    const data = {
      user_id: authUser?.id || '52fe191d-abc8-4087-a045-e2244b43df6e',
      tag_ids: fields.tag_ids,
      title: fields.title,
      content: fields.content,
      slug: fields.slug,
    };
    const tagsReq = data.tag_ids.map((tag_id) => ({
      id: tag_id,
      tag_name: props.tags.find((tag) => tag.id === tag_id)?.tag_name || '',
    }));
    apiPost<Blog>('/api/blogs', {
      id: '',
      content: data.content,
      slug: data.slug,
      title: data.title,
      user_id: data.user_id,
      tags: tagsReq,
    })
      .then((resp) => {
        if (resp.status === 200) {
          router.push(
            routes.customerBlogDetail.pathParams({ id: resp.data.id })
          );
        }
      })
      .catch((err) => {
        console.error(err);
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
            value={fields.tag_ids}
            data={tagsData}
            styles={{ inputField: { boxShadow: 'none', paddingLeft: 0 } }}
            onChange={(value) => onChangeField('tag_ids', value)}
            error={error.tag_ids}
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
