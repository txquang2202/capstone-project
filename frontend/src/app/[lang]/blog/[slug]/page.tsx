'use client';

import { useSuspenseQuery } from '@apollo/client';
import Head from 'next/head';
import Link from 'next/link';

import Author from '@/components/DetailBlogPage/Author';
import Content from '@/components/DetailBlogPage/Content';
// import CopyButton from '@/components/DetailBlogPage/CopyButton';
import EmailSection from '@/components/DetailBlogPage/EmailSection';
import RelatedArticles from '@/components/DetailBlogPage/RelatedArticles';
import { GET_BLOG } from '@/graphql/blog';
import { Blog } from '@/types/blog';

export default function DetailPage({ params }: { params: { slug: string } }) {
  const tags = ['Dành cho nhà tuyển dụng IT', 'Xu hướng tuyển dụng IT'];
  const slug = params.slug;

  const {
    data: { blog },
  } = useSuspenseQuery<{ blog: Blog }, { slug: string }>(GET_BLOG, {
    variables: {
      slug,
    },
  });

  if (!slug) {
    return null;
  }

  return (
    <main>
      <Head>
        <title>{blog.title}</title>
      </Head>
      <section className='scroll-smooth bg-[#f2f2f2] focus:scroll-auto'>
        {/* tags */}
        <div className='container-xxl px-4 pt-4 sm:px-6 lg:px-8'>
          <p className='text-base font-medium text-gray-400'>
            ITviec Blog{' '}
            {tags.map((tag, index) => (
              <span key={index}>/ {tag} </span>
            ))}
          </p>
        </div>

        <div className='container-xxl grid  grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8'>
          {/* left */}
          <div className='col-span-2 rounded-md  border border-gray-200 bg-white'>
            <div className='container-xxl px-12 py-8'>
              {/* content */}
              <Content
                title={blog.title}
                content={blog.content}
                createTime={blog?.created_at as string}
              />
              <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
              {/* share */}
              <div className='flex flex-col items-center justify-center py-8'>
                <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
                  <h4 className='text-red font-medium'>
                    Chia&nbsp;sẻ&nbsp;bài&nbsp;viết
                  </h4>
                  <div className='items-cente flex flex-row gap-x-1'>
                    <Link
                      href='#!'
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#3B5998' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#!'
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#1DA1F2' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#!'
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#3B5998' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                    <Link
                      href='#!'
                      className='transition duration-300 hover:-translate-y-1'
                    >
                      <svg
                        width='40px'
                        height='40px'
                        viewBox='0 0 48 48'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='24' cy='24' r='20' fill='#1DA1F2' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* <div className='mt-4 flex flex-row items-stretch justify-between gap-x-2 rounded  bg-gray-200 px-4 py-3 text-lg'>
                  <CopyButton url={blog.slug} />
                </div> */}
              </div>
              {/* tags */}
              <div className='mt-6 flex flex-row items-center gap-3'>
                <h4>TAG:</h4>
                <button className='self-start'>
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      href='#!'
                      className='hover:text-red hover:border-red mr-2 inline-block rounded-full border border-gray-500  p-2 text-center text-xs'
                    >
                      {tag}
                    </a>
                  ))}
                </button>
              </div>
              <hr className='mt-5 h-[1px] w-full border-none bg-gray-200' />
              {/* author */}
              <Author />
            </div>
          </div>

          {/* right */}
          <div className='col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='sticky top-0'>
              <RelatedArticles />
              <EmailSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
