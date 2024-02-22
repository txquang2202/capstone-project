'use client';

import Link from 'next/link';

import Card from './card';
import Footer from './footer';
import Header from './header';
import Navigation from './navbar';
import SpringCard from './springCard';

export default function BlogPage() {
  return (
    <div className='scroll-smooth bg-[#f2f2f2] focus:scroll-auto'>
      <Navigation selected='blog' />
      <main className=''>
        <Header />

        {/* card */}
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Card
              title='Công ty IT tốt nhất Việt Nam'
              description='Những công ty IT tốt nhất Việt Nam có điều gì đặc biệt? Họ đã phát triển như thế nào sau mỗi năm? Cùng khám phá thêm về những công ty tuyệt vời này nhé!'
              url='#!'
            />
            <Card
              title='Sự nghiệp IT'
              description='Không bao giờ là quá muộn để trở nên xuất sắc trong ngành IT. Từ hình mẫu thực tế, khám phá con đường sự nghiệp IT cho riêng bạn.'
              url='#!'
            />
            <Card
              title='Ứng tuyển & Thăng tiến'
              description='Từ cách viết CV đến phỏng vấn, deal lương. Tận dụng lời khuyên từ người thật, việc thật. Sớm thành "pro", chốt luôn công việc IT tuyệt vời như ý muốn!'
              url='#!'
            />
            <Card
              title='Chuyên môn IT'
              description='Cập nhật kiến thức về các ngôn ngữ lập trình, công nghệ ngành IT và tự học với 100+ tài liệu lập trình IT sau đây. Khám phá ngay!'
              url='#!'
            />
          </div>
        </div>

        {/* news*/}
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-between'>
            <h2 className='text-3xl font-medium'>Mới nhất</h2>
            <a
              href='#!'
              className='font-semibold text-red-500 underline underline-offset-4 hover:text-red-600 '
            >
              Xem tất cả
            </a>
          </div>

          <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2024/02/spring-framework-blog-thumbnail-vippro-700x368.jpg'
              title='Spring là gì? Spring Framework là gì?'
              description='Spring Framework giúp lập trình viên dễ dàng tạo các ứng dụng Java Enterprise (Java EE) và cung cấp mọi thứ bạn cần để sử dụng ngôn ngữ Java. Là mã nguồn mở, Spring có cộng đồng rộng lớn và…'
              tags={['Chuyên môn IT']}
              url='#!'
              readTime='15 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2024/01/quy-trinh-tuyen-dung-blog-vippro-700x368.png'
              title='Bí quyết xây dựng quy trình tuyển dụng giúp tăng tỷ lệ thành công'
              description='Việc xây dựng một quy trình tuyển dụng chỉ dựa vào nhu cầu tìm kiếm nhân tài của công ty mà không cân nhắc hành vi tìm kiếm và ứng tuyển của ứng viên IT thường sẽ xa rời thực…'
              tags={['Dành cho Nhà tuyển dụng IT', 'Xu hướng tuyển dụng IT']}
              url='/blog/detail-blog'
              readTime='7 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2024/01/jquery-la-gi-blog-thumbnail-vippro-700x368.jpg'
              title='Những điều cần biết về jQuery – Thư viện Javascript hàng đầu'
              description='jQuery là gì? Trong danh sách các công cụ và thư viện cho lập trình viên, jQuery nổi bật là một thư viện JavaScript mạnh mẽ và linh hoạt, được sử dụng rộng rãi trong cộng đồng phát triển web….'
              tags={['Chuyên môn IT', 'Tài liệu JS']}
              url='#!'
              readTime='10 phút'
            />
          </div>
        </div>

        {/* most */}
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-start'>
            <h2 className='text-3xl font-medium'>Đọc nhiều nhất</h2>
          </div>

          <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2023/12/itviec-it-salary-report-2023-2024-mini-press-realease-en-vippro-700x368.png'
              title='ITviec releases “IT Salary Report 2023-2024: Data-driven for better decision making”'
              description='Đọc bản tiếng Việt tại đây. ITviec is excited to announce the launch of our IT salary report: “Salary & Job Expectation of IT Professionals in Vietnam 2023-2024: Data-driven for better decision making”…'
              tags={['Báo cáo lương IT', 'Dành cho nhà tuyển dụng IT']}
              url='#!'
              readTime='2 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2022/12/ly-do-nghi-viec-blog-thumbnail-700x368.jpg'
              title='Doanh nghiệp cần lưu ý 3 lý do nghỉ việc thật sự của chuyên gia IT'
              description='Bạn đang đối diện với thực trạng không thể giữ người ở công ty lâu dài? Liệu những lý do như “việc gia đình” có phải là lý do nghỉ việc thật sự? Đọc bài viết này để hiểu rõ…'
              tags={['Báo cáo lương IT', 'Dành cho nhà tuyển dụng IT']}
              url='#!'
              readTime='7 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2023/11/mau-cv-an-tuong-blog-thumbnail-vippro-700x368.jpg'
              title='Hướng dẫn viết mẫu CV ấn tượng theo 4 “điểm vàng” mà nhà tuyển dụng chú ý nhất'
              description='Có nhiều nghiên cứu đã được đưa ra về thời gian mà nhà tuyển dụng đọc một CV IT như 6 giây, 25 giây, 3 phút…  nhưng tóm lại là: CV của bạn có thể không được xem kĩ như…'
              tags={['CV IT', 'Ứng tuyển & Thăng tiến']}
              url='#!'
              readTime='10 phút'
            />
          </div>
        </div>

        {/* selective */}
        <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-start'>
            <h2 className='text-3xl font-medium'>Bài viết chọn lọc</h2>
          </div>

          <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2023/04/Artboard-1-700x377.jpg'
              title='“Là IT Thì Mình Cứ Viết Đi” – Cuộc thi viết hấp dẫn nhất cho dân IT chính thức trở lại'
              description='Cuộc thi viết “Là IT Thì Mình Cứ Viết Đi” do ITviec tổ chức từ ngày 26/04/2023 đến 26/06/2023, nhân dịp kỷ niệm 10 năm thành lập. Cuộc thi là sân chơi hấp dẫn cổ vũ tất cả anh em…'
              tags={['Chuyện IT']}
              url='#!'
              readTime='15 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2022/05/framework-la-gi-thumbnail-700x368.jpg'
              title='Top 15+ framework back-end, front-end và mobile phổ biến nhất 2023'
              description='Là một lập trình viên, bạn không cần phải phát triển mọi ứng dụng lại từ đầu bởi vì đã có các công cụ được thiết kế để hỗ trợ bạn, framework là một trong những công cụ hữu dụng…'
              tags={['Chuyên môn IT']}
              url='#!'
              readTime='7 phút'
            />
            <SpringCard
              imageUrl='https://itviec.com/blog/wp-content/uploads/2022/07/tu-ao-lang-den-out-trinh-thumbnail-700x368.jpg'
              title='“TỪ AO LÀNG ĐẾN OUT TRÌNH” – Lần đầu tiên chuyên gia IT giãi bày bằng con chữ'
              description='Nhân kỷ niệm 9 năm ngày thành lập, ITviec tổ chức cuộc thi viết “Từ Ao làng đến Out trình” nhằm mang đến một sân chơi mới dành cho “anh chị em” IT – nơi để mọi người cùng nhau…'
              tags={['Chuyện IT']}
              url='#!'
              readTime='10 phút'
            />
          </div>
        </div>

        {/* share */}
        <div className='border-y-2 border-[#fccd9a] bg-[#fff5e9]'>
          <div className='mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center justify-around sm:flex-row'>
              <h3 className='mb-6 text-center font-medium sm:mb-0 sm:text-left'>
                Câu chuyện sự nghiệp của bạn sẽ truyền cảm hứng đến rất nhiều
                người.
              </h3>
              <button className='rounded bg-red-500 px-7 py-3 text-center text-2xl font-semibold text-white hover:bg-red-600'>
                <Link href='#!'>Chia sẻ nhé!</Link>
              </button>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-start'>
            <h2 className='text-3xl font-medium'>Kỹ năng IT được săn đón</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-9 gap-4'>
              {skills.slice(0, 18).map((skill, index) => (
                <Link key={index} href='#!' className='hover:text-red-500'>
                  {skill}
                </Link>
              ))}
            </div>
            <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-9 gap-4'>
              {skills.slice(18).map((skill, index) => (
                <Link key={index} href='#!' className='hover:text-red-500'>
                  {skill}
                </Link>
              ))}
              <a
                href='#!'
                className='font-medium text-red-500 underline underline-offset-4 hover:text-red-600 '
              >
                Xem tất cả kỹ năng IT
              </a>
            </div>
          </div>
        </div>

        {/* role */}
        <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
          <div className='flex flex-row items-start justify-start'>
            <h2 className='text-3xl font-medium'>Vị trí IT được săn đón</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-7 gap-4'>
              {positions.slice(0, 14).map((position, index) => (
                <Link key={index} href='#!' className='hover:text-red-500'>
                  {position}
                </Link>
              ))}
            </div>
            <div className='mt-6 grid grid-flow-col grid-cols-2 grid-rows-7 gap-4'>
              {positions.slice(14).map((position, index) => (
                <Link key={index} href='#!' className='hover:text-red-500'>
                  {position}
                </Link>
              ))}
              <a
                href='#!'
                className='font-medium text-red-500 underline underline-offset-4 hover:text-red-600 '
              >
                Xem tất cả vị trí IT
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const skills = [
  'Java',
  'PHP',
  'JavaScript',
  'HTML5',
  'Manager',
  'SQL',
  'Android',
  'iOS',
  'MySQL',
  'Tester',
  'English',
  'Ruby',
  'Python',
  'Mobile Apps',
  'Ruby on Rails',
  'QA QC',
  'Database',
  '.NET',
  'Business Analyst',
  'Linux',
  'Team Leader',
  'NodeJS',
  'System Engineer',
  'Designer',
  'UI-UX',
  'Project Manager',
  'OOP',
  'Oracle',
  'MVC',
  'ReactJS',
  'Embedded',
  'J2EE',
];

const positions = [
  'Lập trình viên Java',
  'Lập trình viên PHP',
  'Lập trình viên JavaScript',
  'Lập trình viên HTML5',
  'Lập trình viên SQL',
  'Lập trình viên Android',
  'Lập trình viên iOS',
  'Tester',
  'Lập trình viên Ruby',
  'Lập trình viên Python',
  'Lập trình viên Ruby on Rails',
  'Lập trình viên .NET',
  'Lập trình viên NodeJS',
  'Lập trình viên Linux',
  'Lập trình viên OOP',
  'Lập trình viên Oracle',
  'Lập trình viên C++',
  'Lập trình viên WordPress',
  'Nhân viên thiết kế',
  'Quản trị cơ sở dữ liệu',
  'Lập trình viên ứng dụng di động',
  'Quản lý dự án',
  'Quản lý sản phẩm',
  'Kỹ sư cầu nối',
];
