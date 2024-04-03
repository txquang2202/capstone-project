import {
  Container,
  MultiSelect,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TextInput,
} from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { apiGet } from '@/apis/api';
import { routes } from '@/configs/router';
import { Blog, Tag } from '@/types/blog';

type Props = {
  allTags: Tag[];
};

type BlogsPagination = {
  totalItems: number;
  totalPages: number;
  blogs: Blog[];
};

const fetchBlogs = async (page: number, pageSize: number) => {
  const resp = await apiGet<BlogsPagination>(
    `/api/blogs?page=${page}&limit=${pageSize}`
  );
  return resp.data;
};

const BlogTable = ({ allTags }: Props) => {
  const [filteredBlogs, setFilteredBlogs] = useState([] as Blog[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([] as string[]);
  const queryParams = new URLSearchParams(window.location.search);
  const pageParam = queryParams.get('page') || '1';
  const pageSizeParam = queryParams.get('pageSize') || '10';
  const defaultPage = parseInt(pageParam) > 0 ? parseInt(pageParam) : 1;
  const defaultPageSize =
    parseInt(pageSizeParam) > 0 ? parseInt(pageSizeParam) : 10;
  const [page, setPage] = useState(defaultPage);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const { data, isLoading, error, refetch } = useQuery<BlogsPagination, Error>(
    'blogData',
    () => fetchBlogs(pagination.active, pageSize)
  );
  const totalPages = data?.totalPages || 1;
  const pagination = usePagination({
    total: totalPages,
    page,
    onChange: setPage,
    siblings: 3,
  });
  const router = useRouter();

  useEffect(() => {
    const filteredData = data?.blogs.filter((blog) => {
      const titleMatch = blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const tagMatch =
        !selectedTags ||
        selectedTags.length === 0 ||
        selectedTags.every((tagId) =>
          blog.tags?.some((tag) => tag.id === tagId)
        );
      return titleMatch && tagMatch;
    });
    setFilteredBlogs(filteredData || []);
  }, [data?.blogs, searchTerm, selectedTags]);
  useEffect(() => {
    refetch();
  }, [pagination.active, pageSize, refetch]);
  useEffect(() => {
    router.push(
      routes.customerBlogList.queryParams({
        page: pagination.active.toString(),
        pageSize: pageSize.toString(),
      })
    );
  }, [pagination.active, pageSize, router]);
  const handleRowClick = (id: string) => {
    router.push(routes.customerBlogDetail.pathParams({ id }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='mb-md'>
      <Stack className='flex-container space-between mb-md flex-row'>
        <TextInput
          label='Title'
          className='flex-grow'
          placeholder='Input title to filter blogs'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          size='md'
        />
        <MultiSelect
          label='Tag'
          placeholder='Choose tags'
          data={[
            ...allTags.map((tag) => ({ value: tag.id, label: tag.tag_name })),
          ]}
          value={selectedTags}
          onChange={(value) => setSelectedTags(value)}
          className='flex-grow'
          size='md'
        />
      </Stack>
      <Container size='xll' px='0'>
        <Paper shadow='xl' radius='md' p='md'>
          <Table
            horizontalSpacing='xl'
            verticalSpacing='md'
            highlightOnHover
            style={{ fontSize: '16px' }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th className='text-left'>ID</Table.Th>
                <Table.Th className='text-left'>Title</Table.Th>
                <Table.Th className='text-left'>Tags</Table.Th>
                <Table.Th className='text-right'>Time to Read</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredBlogs.map((blog) => (
                <Table.Tr key={blog.id} onClick={() => handleRowClick(blog.id)}>
                  <Table.Td className='text-left'>{blog.id}</Table.Td>
                  <Table.Td className='text-left'>{blog.title}</Table.Td>
                  <Table.Td className='text-left'>
                    {blog.tags?.map((tag) => (
                      <span
                        key={tag.id}
                        className='mr-2 inline-block rounded bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'
                      >
                        {tag.tag_name}
                      </span>
                    ))}
                  </Table.Td>
                  <Table.Td className='text-right'>
                    {blog.time_read} min
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          <Stack
            className='flex-container flex-row justify-center'
            justify='center'
            align='center'
          >
            <span className='mt-2'>Records</span>
            <div className='mt-2' style={{ width: '70px' }}>
              <Select
                size='sm'
                data={['10', '20', '50', '100']}
                value={pageSize.toString()}
                defaultValue='10'
                onChange={(value) => {
                  setPageSize(parseInt(value || '10'));
                }}
                checkIconPosition='right'
              />
            </div>
            <Pagination
              value={pagination.active}
              onChange={(page) => pagination.setPage(page)}
              total={totalPages}
              color='red'
              size='lg'
              radius='xs'
              mt='sm'
              siblings={3}
            />
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};

export default BlogTable;
