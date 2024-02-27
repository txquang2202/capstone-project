import { IconArrowRightCircle, IconChevronRight, IconMapPin } from '../Icons';
import { StickyTag } from '../StickyTag';

const data = {
  background:
    'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHo1UEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f6c1362248ec8aab1cc05987b1ac3b88b4f0c0cf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDV0FJdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e6f64d53dc2e90d2698b6c3e954a8523819e8019/image_44e3a5f6-6b25-4023-b4a1-1837fb9967f720211105_101501.jpg',
  image:
    'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZvSXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--88c82102b4c6782414b90e4077f75449b9789560/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Logo%20MB%20he%20mau%20RGB%2001.png',
  name: 'MB Bank',
  location: 'Ha Noi',
  fullName: 'Ngân Hàng TMCP Quân Đội',
  jobs: [
    'Fullstack Developer (Java/ MySQL/ Oracle) - Khối CNTT',
    'CV Kiểm soát rủi ro gian lận trong các hoạt động CNTT',
    'CV/CVCC Quản trị rủi ro công nghệ - IT Risk',
    'CV/CVCC Quản trị rủi ro công nghệ - IT Risk 1',
    'CV/CVCC Quản trị rủi ro công nghệ - IT Risk 2',
  ],
};

const Spotlight = () => {
  return (
    <StickyTag title='Company Spotlight'>
      <div className='flex h-[200px] rounded-lg bg-white'>
        <div className='relative flex-1'>
          <img
            alt='background'
            src={data.background}
            className='h-full w-[91%] rounded-l-lg'
          />
          <div className='border-silver-grey absolute right-0 top-1/2 flex aspect-square w-[120px] -translate-y-1/2 translate-x-5 items-center justify-center rounded border bg-white'>
            <img alt='image' src={data.image} className='h-auto w-full' />
          </div>
        </div>
        <div className='mx-2 flex flex-1 flex-col justify-center pl-[60px]'>
          <div className='mb-1 font-semibold'>{data.name}</div>
          <div className='flex items-center gap-2 text-sm'>
            <IconMapPin size={16} color='var(--dark-grey)' />
            {data.name}
          </div>
          <div className='py-4 text-sm'>{data.fullName}</div>
          <div className='text-hyperlink flex items-center'>
            View {data.jobs.length} jobs <IconChevronRight size={16} />
          </div>
        </div>
        <div className='border-dark-grey my-4 flex flex-1 flex-col justify-center border-l border-dashed p-4'>
          {data.jobs.slice(0, 3).map((job, index) => (
            <div key={index} className='flex items-center gap-2 py-1 text-sm'>
              <div className='w-4'>
                <IconArrowRightCircle color='var(--primary)' size={16} />
              </div>
              {job}
            </div>
          ))}
        </div>
      </div>
    </StickyTag>
  );
};

export default Spotlight;
