'use client';

import { MultiSelect, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

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
  slug: string;
  title: string;
  content: string;
  tag_ids: string[];
};

type UpdateBlogProps = {
  blog: Blog;
  tags: Tag[];
  onClose: () => void;
  onUpdate: (updatedBlog: Blog, updatedBlogTag: BlogTag[]) => void;
};

const UpdateBlog = ({ blog, tags, onClose, onUpdate }: UpdateBlogProps) => {
  const { t } = useLocale();
  const router = useRouter();
  const { isEmptyDraftJs } = useEmptyText();
  const [isError, setIsError] = useState(false);
  const { fields, onChangeField, error, handleSubmit } = useForm<UpdateBlog>({
    defaultState: {
      slug: blog.slug,
      tag_ids: blog.tags?.map((tag) => tag.id) || [],
      title: blog.title,
      content: blog.content,
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
      id: blog.id,
      tags: fields.tag_ids.map((tag_id) => {
        return {
          id: tag_id,
          tag_name: tags.find((tag) => tag.id === tag_id)?.tag_name || '',
        };
      }),
      title: fields.title,
      content: fields.content,
      slug: fields.slug,
      created_at: new Date(),
    };
    apiPut<Blog>(`/api/blogs/${data.id}`, data)
      .then((resp) => {
        if (resp.status === 200) {
          router.refresh();
          console.log('Update blog successfully', resp.data);
          onUpdate(
            {
              content: resp.data.content,
              created_at: resp.data.created_at,
              id: resp.data.id,
              slug: resp.data.slug,
              time_read: resp.data.time_read,
              title: resp.data.title,
              user_id: resp.data.user_id,
            },
            (resp.data.tags || []).map((tag) => {
              return {
                tag_id: tag.id,
                blog_id: data.id,
                tag: {
                  tag_name:
                    tags.find((item) => item.id === tag.id)?.tag_name || '',
                },
              };
            })
          );
          onClose();
        } else {
          setIsError(true);
          return JSON.stringify(resp.data);
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
      {isError && <div className='text-red-500'>Error: {isError}</div>}
    </div>
  );
};

export default UpdateBlog;
