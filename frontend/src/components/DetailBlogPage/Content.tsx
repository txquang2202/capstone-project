import React from 'react';

export default function Content() {
  return (
    <div className='mb-12'>
      <div className=' font-medium italic text-gray-400 '>
        <p>Ngày xuất bản: 01/02/2024</p>
        <p>Ngày cập nhật: 01/02/2024</p>
      </div>
      <h2 className='text-red mb-8 mt-4 text-4xl font-bold'>
        Bí quyết xây dựng quy trình tuyển dụng giúp tăng tỷ lệ thành công
      </h2>
      <h3 className='mb-10'>NỘI DUNG CHÍNH</h3>
      <figure className='mb-10'>
        <img
          src='https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-700x368.png'
          alt=''
          className='w-full transform cursor-pointer bg-cover bg-center transition duration-300 ease-in-out hover:brightness-90'
        />
      </figure>
      <div className='prose lg:prose-xl text-xl leading-9'>
        <p className='mb-8  font-medium italic'>
          Việc xây dựng một quy trình tuyển dụng chỉ dựa vào nhu cầu tìm kiếm
          nhân tài của công ty mà không cân nhắc hành vi tìm kiếm và ứng tuyển
          của ứng viên IT thường sẽ xa rời thực tế và khó đạt được hiệu quả. Bài
          viết sau đây sẽ gợi ý cho những nhà tuyển dụng IT các bí quyết xây
          dựng quy trình tuyển dụng dựa trên chính hành vi tìm việc hiện nay của
          chuyên gia IT tại Việt Nam.
        </p>
        <p>Đọc bài viết sau đây sẽ giúp nhà tuyển dụng hiểu rõ:</p>
        <ul className='list-disc p-6'>
          <li>Xu hướng tìm việc và ứng tuyển của các chuyên gia IT hiện nay</li>
          <li>
            Lý do khiến ứng viên IT quyết định ứng tuyển công việc mới (bên cạnh
            mức lương)
          </li>
          <li>
            Nhà tuyển dụng nên đưa ra lời đề nghị công việc với mức lương như
            thế nào
          </li>
        </ul>
        <p>
          Từ đó, nhà tuyển dụng có thể xây dựng quy trình tuyển dụng phù hợp hơn
          với hành vi tìm việc, đáp ứng mong đợi nghề nghiệp của chuyên gia IT
          để tăng tỷ lệ tuyển dụng thành công.
        </p>
      </div>
    </div>
  );
}
