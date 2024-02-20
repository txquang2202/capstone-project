'use client';
import Image from 'next/image';
import NextImage from '@/components/NextImage';
import Card from './card';
import Navigation from './navbar';

export default function ProfilePage() {
  return (
    <div className='scroll-smooth bg-[#f2f2f2] pt-[88px] focus:scroll-auto'>
      <Navigation selected='profile' />

      {/* content */}
      <main className=' bg-[#f2f2f2]  py-[24px]'>
        <div className='flex flex-row flex-wrap items-start justify-center gap-[24px]'>
          {/* left content*/}
          <div className='w-[300px] rounded-md bg-[#ffff] shadow-md sm:static md:static  lg:static xl:sticky xl:top-2 2xl:sticky 2xl:top-2'>
            <div className='p-5'>
              {/* start percent */}
              <div className='border-gray-250 flex flex-row items-start justify-center gap-5 border-b-[1px] p-2'>
                {/* start */}
                <div className='relative h-[84px] w-[84px]'>
                  <svg
                    className='h-full w-full'
                    width='36'
                    height='36'
                    viewBox='0 0 36 36'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='18'
                      cy='18'
                      r='16'
                      fill='none'
                      className='stroke-current text-slate-50'
                      stroke-width='2'
                    ></circle>

                    <g className='origin-center -rotate-90 transform'>
                      <circle
                        cx='18'
                        cy='18'
                        r='16'
                        fill='none'
                        className='stroke-current text-yellow-600 dark:text-yellow-500'
                        stroke-width='3'
                        stroke-dasharray='100'
                        stroke-dashoffset='75'
                      ></circle>
                    </g>
                  </svg>
                  <div className='absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
                    <div className='border-gray-250 rounded-full border-4 text-center'>
                      <div className='p-3'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='#eb9818'
                          viewBox='0 0 24 24'
                          width='38px'
                          height='38px'
                        >
                          <path d='M0 0h24v24H0z' fill='none' />
                          <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                          <path d='M0 0h24v24H0z' fill='none' />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* percent */}
                <div className='flex flex-col'>
                  <span className='font-semibold'>Profile&nbsp;Strength</span>
                  <span className='text-lg font-bold text-yellow-500'>
                    Poor
                  </span>
                  <span>25%&nbsp;completed</span>
                </div>
              </div>
              {/* skills */}
              <div className='border-gray-250 border-b-[1px] text-center'>
                <div className='pb-4 pt-4 text-start'>
                  <span className='font-semibold'>
                    Upgrade profile to "Excellent" to unlock Download CV
                  </span>

                  {/* add item */}
                  <div className='flex flex-col justify-center'>
                    {/* item 1 */}
                    <div className='mt-4 flex cursor-pointer  items-center gap-2'>
                      <svg
                        id='Layer_1'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 122.88 122.88'
                        className='h-4 w-4'
                        fill='blue'
                      >
                        <path d='M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z' />
                      </svg>
                      <span className='text-blue-600 hover:text-blue-700'>
                        Add About me
                      </span>
                    </div>
                    {/* item 2 */}
                    <div className='mt-4 flex cursor-pointer items-center gap-2 '>
                      <svg
                        id='Layer_1'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 122.88 122.88'
                        className='h-4 w-4'
                        fill='blue'
                      >
                        <path d='M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z' />
                      </svg>
                      <span className='text-blue-600 hover:text-blue-700'>
                        Add Work Experience
                      </span>
                    </div>
                    {/* item 3 */}
                    <div className='mt-4 flex cursor-pointer items-center gap-2 '>
                      <svg
                        id='Layer_1'
                        data-name='Layer 1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 122.88 122.88'
                        className='h-4 w-4'
                        fill='blue'
                      >
                        <path d='M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z' />
                      </svg>
                      <span className='text-blue-600 hover:text-blue-700'>
                        Add Education
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* cv */}
              <div className='pb-4 pt-4 text-center'>
                <div className='flex items-center gap-2'>
                  <img src='https://itviec.com/assets/profile/cv-d4db00ef4c885c25e437715236babd64c7cbb960ddf4771e69e55dd8169dd5ba.svg' />
                  <span className='text-start'>
                    Explore CV templates and download your CV
                  </span>
                </div>

                <a
                  href='#!'
                  className='mt-4 inline-block w-full rounded-md  bg-[#ea1e30] px-4 py-3 font-semibold text-white shadow-md hover:bg-red-700  focus:outline-none'
                >
                  Preview & Download CV
                </a>
              </div>
            </div>
          </div>

          {/* right content*/}
          <div className='w-full max-w-[calc(100%-48px)] md:w-[900px]'>
            <div className='rounded-md bg-[#ffff] shadow-md'>
              <div className='flex flex-row flex-wrap justify-center px-4 pb-6 pt-6'>
                {/* avatar */}
                <div className='flex w-[180px] items-start justify-center  p-2'>
                  <img
                    width='110'
                    height='110'
                    className='rounded-full'
                    alt='Avatar Profile'
                    data-controller='lazyload'
                    data-preview-image-target='output'
                    src='https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNEloT3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--dd8d99b728db2ce36ad716ad3e95fc9e57c31fea/AAcHTtdyE-ifZTqgOAAfZVgwjEUYYJRHbcgiJtTRR_FyAEl3=s96-c.jpg'
                  />
                </div>

                {/* information */}
                <div className='w-[680px] '>
                  {/* Username */}
                  <div className='flex flex-row justify-between'>
                    <h2>Duy HQ</h2>

                    {/* icon edit */}
                    <div className='cursor-pointer'>
                      <svg
                        width='20px'
                        height='20px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        stroke='#db1f1f'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0' />

                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />

                        <g id='SVGRepo_iconCarrier'>
                          <path
                            d='M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z'
                            stroke='#ed1b2f'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13'
                            stroke='#ed1b2f'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className='mt-4 font-bold'>frontend</div>

                  {/* profile */}
                  <div className='mt-4'>
                    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                      <div className='flex flex-grow items-center gap-2'>
                        <svg
                          fill='#000000'
                          height='16px'
                          width='16px'
                          version='1.1'
                          id='Capa_1'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 75.294 75.294'
                        >
                          <g>
                            <path
                              d='M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z'
                            />
                          </g>
                        </svg>
                        <p>duyhq47@gmail.com</p>
                      </div>
                      <div className='flex flex-grow items-center gap-2'>
                        <svg
                          width='16px'
                          height='16px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M4 4.5C4 5.02384 4.11743 5.53557 4.33772 6H2C1.44772 6 1 6.44772 1 7V12C1 12.5523 1.44772 13 2 13H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V13H22C22.5523 13 23 12.5523 23 12V7C23 6.44772 22.5523 6 22 6H19.6623C19.8826 5.53557 20 5.02384 20 4.5C20 3.57174 19.6313 2.6815 18.9749 2.02513C18.3185 1.36875 17.4283 1 16.5 1C15.1769 1 14.1209 1.37202 13.3032 1.97769C12.7384 2.39606 12.316 2.90438 12 3.42396C11.684 2.90438 11.2616 2.39606 10.6968 1.97769C9.87913 1.37202 8.82309 1 7.5 1C6.57174 1 5.6815 1.36875 5.02513 2.02513C4.36875 2.6815 4 3.57174 4 4.5ZM7.5 3C7.10218 3 6.72064 3.15804 6.43934 3.43934C6.15804 3.72064 6 4.10218 6 4.5C6 4.89782 6.15804 5.27936 6.43934 5.56066C6.72064 5.84196 7.10218 6 7.5 6H10.8745C10.8032 5.66322 10.6934 5.2833 10.5256 4.91036C10.2937 4.39508 9.96597 3.92528 9.50633 3.58481C9.05837 3.25298 8.42691 3 7.5 3ZM13.1255 6H16.5C16.8978 6 17.2794 5.84196 17.5607 5.56066C17.842 5.27936 18 4.89782 18 4.5C18 4.10218 17.842 3.72064 17.5607 3.43934C17.2794 3.15804 16.8978 3 16.5 3C15.5731 3 14.9416 3.25298 14.4937 3.58481C14.034 3.92528 13.7063 4.39508 13.4744 4.91036C13.3066 5.2833 13.1968 5.66322 13.1255 6ZM13 8V11H21V8H13ZM11 8V11H3V8H11ZM13 20H19V13H13V20ZM11 13V20H5V13H11Z'
                            fill='#000000'
                          />
                        </svg>
                        <p>28/02/2002</p>
                      </div>
                      <div className='flex flex-grow items-center gap-2'>
                        <svg
                          fill='#000000'
                          width='16px'
                          height='16px'
                          viewBox='0 0 200 200'
                          data-name='Layer 1'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <title />
                          <path d='M150,34.94c-27.5-27.5-72-27.5-100,0a70.49,70.49,0,0,0-8,90l33.5,48a30.4,30.4,0,0,0,49.5,0l33.5-48A71.18,71.18,0,0,0,150,34.94Zm-8.5,78.5-33.5,48a10.31,10.31,0,0,1-16.5,0l-33.5-48a50.14,50.14,0,0,1,6-64.5c20-20,52-20,71.5,0a50.19,50.19,0,0,1,6,64.5Zm-41.5-67a35,35,0,1,0,35,35A34.78,34.78,0,0,0,100,46.44Zm0,50a15,15,0,1,1,15-15A14.73,14.73,0,0,1,100,96.44Z' />
                        </svg>
                        <p>TP Hồ Chí Minh</p>
                      </div>
                      <div className='flex flex-grow items-center gap-2'>
                        <svg
                          width='16px'
                          height='16px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z'
                            stroke='#000000'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        <p>0944389951</p>
                      </div>
                      <div className='flex flex-grow items-center gap-2'>
                        <svg
                          width='16px'
                          height='16px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
                            stroke='#000000'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                        <p>Male</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail information */}
            <div className='mt-6'>
              <Card
                title='About Me'
                description='Introduce your strengths and years of experience'
                imageUrl='https://itviec.com/assets/profile/about_me_no_info-c7c9aa8f95cc149ec7646e171c59c2d261d0c9d62da0f5b1fff75886691bd8e9.svg'
                isOpen
              />
              <Card
                title='Education'
                description='Share your background education'
                imageUrl='https://itviec.com/assets/profile/education_no_info-73d159c5c97d90ff0cdd22764fdde92a6ecefaa39c1f68775ba3e126e8ee6140.svg'
                isOpen
              />
              <Card
                title='Work Experience'
                description='Highlight detailed information about your job history'
                imageUrl='https://itviec.com/assets/profile/experience_no_info-c25e08f6ba4db4a16e0b948d42a90451c7895790324da6420ffeba9525c9c6eb.svg'
                isOpen
              />
              <Card
                title='Skills'
                description='Showcase your skills and proficiencies'
                imageUrl='https://itviec.com/assets/profile/skill_no_info-02f56fa0a5b0ab2ae7d233ceac098f1102a4f774de22f70b0c81fd8e1fb9efbf.svg'
                isOpen
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
