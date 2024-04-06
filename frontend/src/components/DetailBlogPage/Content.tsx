import React from 'react';

type ContentProps = {
  title: string;
  content: string;
  createTime: string;
};

export default function Content({ title, content, createTime }: ContentProps) {
  const createDate = new Date(createTime);
  const day = createDate.getDate();
  const month = createDate.getMonth() + 1;
  const year = createDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className='mb-12'>
      <div className=' font-medium italic text-gray-400 '>
        <p>Ngày xuất bản: {formattedDate}</p>
      </div>
      <h2 className='text-red mb-8 mt-4 text-4xl font-bold'>{title}</h2>
      <h3 className='mb-10'>NỘI DUNG CHÍNH</h3>
      <figure className='mb-10'>
        <img
          src='https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-700x368.png'
          alt=''
          className='w-full transform cursor-pointer bg-cover bg-center transition duration-300 ease-in-out hover:brightness-90'
        />
      </figure>
      <div
        className='prose lg:prose-xl text-xl  leading-9'
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
