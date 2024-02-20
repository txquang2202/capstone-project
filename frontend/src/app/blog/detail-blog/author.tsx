// components/AuthorInfo.tsx
import Link from 'next/link';

interface AuthorInfoProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
  url: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  name,
  role,
  imageUrl,
  description,
  url,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='mt-4 flex flex-row justify-between'>
        <h4 className='text-gray-400'>TÁC GIẢ</h4>
        <div className='flex flex-row items-center justify-between'>
          <Link href={'#!'} className=' hover:bg-gray-100'>
            <svg
              width='26px'
              height='26px'
              viewBox='0 -0.5 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.5 6.25C12.9142 6.25 13.25 5.91421 13.25 5.5C13.25 5.08579 12.9142 4.75 12.5 4.75V6.25ZM20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 12.0858 18.75 12.5H20.25ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM15.412 4.75C14.9978 4.75 14.662 5.08579 14.662 5.5C14.662 5.91421 14.9978 6.25 15.412 6.25V4.75ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.641C18.75 10.0552 19.0858 10.391 19.5 10.391C19.9142 10.391 20.25 10.0552 20.25 9.641H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM12.5 4.75H9.5V6.25H12.5V4.75ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5H6.25C6.25 7.70507 7.70507 6.25 9.5 6.25V4.75ZM4.75 9.5V15.5H6.25V9.5H4.75ZM4.75 15.5C4.75 18.1234 6.87665 20.25 9.5 20.25V18.75C7.70507 18.75 6.25 17.2949 6.25 15.5H4.75ZM9.5 20.25H15.5V18.75H9.5V20.25ZM15.5 20.25C18.1234 20.25 20.25 18.1234 20.25 15.5H18.75C18.75 17.2949 17.2949 18.75 15.5 18.75V20.25ZM20.25 15.5V12.5H18.75V15.5H20.25ZM19.5 4.75H15.412V6.25H19.5V4.75ZM18.75 5.5V9.641H20.25V5.5H18.75ZM18.9697 4.96967L11.9697 11.9697L13.0303 13.0303L20.0303 6.03033L18.9697 4.96967Z'
                fill='#000000'
              />
            </svg>
          </Link>
          <Link href={'#!'} className=' hover:bg-gray-100'>
            <svg
              fill='#b0b0b0'
              width='26px'
              height='26px'
              viewBox='-5.5 0 32 32'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              stroke='#b0b0b0'
              stroke-width='0.384'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0' />

              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              />

              <g id='SVGRepo_iconCarrier'>
                <title>facebook</title>
                <path d='M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z' />{' '}
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className='mt-2 flex flex-row items-center gap-2'>
        <img src={imageUrl} alt={name} className='h-14 w-14 rounded-full' />
        <div>
          <p className='text-xl font-bold'>{name}</p>
          <p className='italic'>{role}</p>
        </div>
      </div>
      <div className='mt-2 text-sm'>
        <p className=''>
          {description}{' '}
          <span className='font-semibold text-blue-700'>
            <Link href={url}>...xem thêm</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthorInfo;
