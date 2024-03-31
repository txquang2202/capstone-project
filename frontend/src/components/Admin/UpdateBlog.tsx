'use client';

import { MultiSelect, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { apiPut } from '@/apis/api';
import useEmptyText from '@/hooks/useEmptyText';
import { useForm } from '@/hooks/useForm';
import { cn } from '@/lib/classNames';
import { useLocale } from '@/locale';
import { Blog, BlogTag, Tag } from '@/types/blog';

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

type UpdateBlog = {
  id: string;
  user_id: string;
  slug: string;
  title: string;
  time_read: number;
  content: string;
  tag_ids: string[];
  created_at: Date;
};

type UpdateBlogProps = {
  blog: UpdateBlog;
  tags: Tag[];
  onClose: () => void;
  onUpdate: (updatedBlog: Blog, updatedBlogTag: BlogTag[]) => void;
};

const UpdateBlog = ({ blog, tags, onClose, onUpdate }: UpdateBlogProps) => {
  const { t } = useLocale();
  const router = useRouter();
  const { isEmptyDraftJs } = useEmptyText();
  const { fields, onChangeField, error, handleSubmit } = useForm<UpdateBlog>({
    defaultState: {
      id: blog.id,
      user_id: blog.user_id,
      slug: blog.slug,
      tag_ids: blog.tag_ids,
      title: blog.title,
      content: blog.content,
      time_read: blog.time_read,
      created_at: blog.created_at,
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
    tags || [{ tag_id: 'Loading...', tag_name: 'Loading...' }]
  ).map((tag) => ({
    value: tag.id,
    label: tag.tag_name,
  }));
  const onSubmit = () => {
    const data = {
      id: fields.id,
      user_id: fields.id,
      tag_ids: fields.tag_ids,
      title: fields.title,
      content: fields.content,
      slug: fields.slug,
      time_read: fields.time_read,
      created_at: fields.created_at,
    };
    apiPut<Blog>(`/api/blogs/${data.id}`, data)
      .then((resp) => {
        if (resp.status === 200) {
          router.refresh();
          onUpdate(
            {
              content: data.content,
              created_at: data.created_at,
              id: data.id,
              slug: data.slug,
              time_read: data.time_read,
              title: data.title,
              user_id: data.user_id,
            },
            data.tag_ids.map((tag_id) => {
              return {
                tag_id,
                blog_id: data.id,
                tag: tags.find((tag) => tag.id === tag_id),
              };
            })
          );
          onClose();
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
            value={fields.title}
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
            value={fields.slug}
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
            value={fields.content}
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
        Save Blog
      </Button>
    </div>
  );
};

export default UpdateBlog;
