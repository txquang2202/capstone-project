'use client';

import { IconFire, IconMapPin, IconSalary } from '../Icons';

const CompanyJobs = () => {
  return (
    <div>
      <h2 className='pb-[24px] pt-3'>13 job openings</h2>

      <div className='i-scrollbar official-jobs-scroll mx-0'>
        {/* Element tag */}
        <div className='col-md-12 item-card'>
          <div className='job-card super-hot relative flex h-full flex-col rounded-lg bg-[#fff4e9] pt-4'>
            <div className='grow px-4 md:px-3'>
              <div className='ilabel ilabel-danger absolute right-0'>
                <IconFire width={12} height={15} />
                SUPER HOT
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-[14px] font-[400] text-[#a6a6a6]'>
                  Posted 3 days ago
                </span>
              </div>

              <h3 className='mt-3 overflow-hidden text-[black]'>
                <a href='https://itviec.com/it-jobs/senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202?lab_feature=employer_job'>
                  Senior / Middle DevOps Engineer
                </a>
              </h3>

              <div className='my-2 flex items-center'>
                <a
                  href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  className='job-card-logo box-shadow-normal rounded border-solid'
                >
                  <img
                    alt='NAB Innovation Centre Vietnam Vietnam Small Logo'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/logo.jpg'
                    className='h-full object-contain'
                  />
                </a>

                <span className='ml-2 text-[14px] font-[400]'>
                  <a
                    className='overflow-hidden text-[#414042]'
                    href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  >
                    NAB Innovation Centre Vietnam
                  </a>
                </span>
              </div>

              <div className='border-bottom-dashed flex items-center pb-3 font-[500] text-[#414042]'>
                <IconSalary className='h-[16px] w-[16px]' />
                <a
                  href='https://itviec.com/sign_in?job=senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202'
                  className='pl-2 underline'
                >
                  Sign in to view salary
                </a>
              </div>

              <div className='border-bottom-dashed py-5'>
                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <svg
                      fill='none'
                      height='18'
                      viewBox='0 0 24 25'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_947_6633)'>
                        <path
                          d='M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M11.5 18.9375H12.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <line
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          x1='1'
                          x2='23'
                          y1='23.5'
                          y2='23.5'
                        ></line>
                      </g>
                      <defs>
                        <clipPath id='clip0_947_6633'>
                          <rect
                            fill='white'
                            height='24'
                            transform='translate(0 0.5)'
                            width='24'
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Hybrid
                  </span>
                </div>
                <div className='flex items-center'></div>

                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <IconMapPin width={16} height={16} />
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Ho Chi Minh - Ha Noi
                  </span>
                </div>

                <div className='flex flex-wrap gap-[12px] pt-[16px]'>
                  <a className='itag itag-sm itag-light'>DevOps</a>
                  <a className='itag itag-sm itag-light'>AWS</a>
                  <a className='itag itag-sm itag-light'>Cloud</a>
                </div>
              </div>

              <ul className='py-4 text-[14px] font-[500]'>
                <li className='list-disc'>
                  Very competitive remuneration package
                </li>
                <li className='list-disc'>
                  Build products for millions of users in Australia
                </li>
                <li className='list-disc'>
                  Hybrid and flexible working environment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Element tag */}
        <div className='col-md-12 item-card'>
          <div className='job-card super-hot relative flex h-full flex-col rounded-lg bg-[#fff4e9] pt-4'>
            <div className='grow px-4 md:px-3'>
              {/* <div className="ilabel absolute ilabel-danger right-0">
                                                <IconFire width={12} height={15} />
                                                SUPER HOT
                                            </div> */}

              <div className='flex items-center justify-between'>
                <span className='text-[14px] font-[400] text-[#a6a6a6]'>
                  Posted 3 days ago
                </span>
              </div>

              <h3 className='mt-3 overflow-hidden text-[black]'>
                <a href='https://itviec.com/it-jobs/senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202?lab_feature=employer_job'>
                  Senior / Middle DevOps Engineer
                </a>
              </h3>

              <div className='my-2 flex items-center'>
                <a
                  href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  className='job-card-logo box-shadow-normal rounded border-solid'
                >
                  <img
                    alt='NAB Innovation Centre Vietnam Vietnam Small Logo'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/logo.jpg'
                    className='h-full object-contain'
                  />
                </a>

                <span className='ml-2 text-[14px] font-[400]'>
                  <a
                    className='overflow-hidden text-[#414042]'
                    href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  >
                    NAB Innovation Centre Vietnam
                  </a>
                </span>
              </div>

              <div className='border-bottom-dashed flex items-center pb-3 font-[500] text-[#414042]'>
                <IconSalary className='h-[16px] w-[16px]' />
                <a
                  href='https://itviec.com/sign_in?job=senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202'
                  className='pl-2 underline'
                >
                  Sign in to view salary
                </a>
              </div>

              <div className='border-bottom-dashed py-5'>
                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <svg
                      fill='none'
                      height='18'
                      viewBox='0 0 24 25'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_947_6633)'>
                        <path
                          d='M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M11.5 18.9375H12.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <line
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          x1='1'
                          x2='23'
                          y1='23.5'
                          y2='23.5'
                        ></line>
                      </g>
                      <defs>
                        <clipPath id='clip0_947_6633'>
                          <rect
                            fill='white'
                            height='24'
                            transform='translate(0 0.5)'
                            width='24'
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Hybrid
                  </span>
                </div>
                <div className='flex items-center'></div>

                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <IconMapPin width={16} height={16} />
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Ho Chi Minh - Ha Noi
                  </span>
                </div>

                <div className='flex flex-wrap gap-[12px] pt-[16px]'>
                  <a className='itag itag-sm itag-light'>DevOps</a>
                  <a className='itag itag-sm itag-light'>AWS</a>
                  <a className='itag itag-sm itag-light'>Cloud</a>
                </div>
              </div>

              <ul className='py-4 text-[14px] font-[500]'>
                <li className='list-disc'>
                  Very competitive remuneration package
                </li>
                <li className='list-disc'>
                  Build products for millions of users in Australia
                </li>
                <li className='list-disc'>
                  Hybrid and flexible working environment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Element tag */}
        <div className='col-md-12 item-card'>
          <div className='job-card super-hot relative flex h-full flex-col rounded-lg bg-[#fff4e9] pt-4'>
            <div className='grow px-4 md:px-3'>
              {/* <div className="ilabel absolute ilabel-danger right-0">
                                                <IconFire width={12} height={15} />
                                                SUPER HOT
                                            </div> */}

              <div className='flex items-center justify-between'>
                <span className='text-[14px] font-[400] text-[#a6a6a6]'>
                  Posted 3 days ago
                </span>
              </div>

              <h3 className='mt-3 overflow-hidden text-[black]'>
                <a href='https://itviec.com/it-jobs/senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202?lab_feature=employer_job'>
                  Senior / Middle DevOps Engineer
                </a>
              </h3>

              <div className='my-2 flex items-center'>
                <a
                  href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  className='job-card-logo box-shadow-normal rounded border-solid'
                >
                  <img
                    alt='NAB Innovation Centre Vietnam Vietnam Small Logo'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/logo.jpg'
                    className='h-full object-contain'
                  />
                </a>

                <span className='ml-2 text-[14px] font-[400]'>
                  <a
                    className='overflow-hidden text-[#414042]'
                    href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  >
                    NAB Innovation Centre Vietnam
                  </a>
                </span>
              </div>

              <div className='border-bottom-dashed flex items-center pb-3 font-[500] text-[#414042]'>
                <IconSalary className='h-[16px] w-[16px]' />
                <a
                  href='https://itviec.com/sign_in?job=senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202'
                  className='pl-2 underline'
                >
                  Sign in to view salary
                </a>
              </div>

              <div className='border-bottom-dashed py-5'>
                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <svg
                      fill='none'
                      height='18'
                      viewBox='0 0 24 25'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_947_6633)'>
                        <path
                          d='M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M11.5 18.9375H12.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <line
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          x1='1'
                          x2='23'
                          y1='23.5'
                          y2='23.5'
                        ></line>
                      </g>
                      <defs>
                        <clipPath id='clip0_947_6633'>
                          <rect
                            fill='white'
                            height='24'
                            transform='translate(0 0.5)'
                            width='24'
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Hybrid
                  </span>
                </div>
                <div className='flex items-center'></div>

                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <IconMapPin width={16} height={16} />
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Ho Chi Minh - Ha Noi
                  </span>
                </div>

                <div className='flex flex-wrap gap-[12px] pt-[16px]'>
                  <a className='itag itag-sm itag-light'>DevOps</a>
                  <a className='itag itag-sm itag-light'>AWS</a>
                  <a className='itag itag-sm itag-light'>Cloud</a>
                </div>
              </div>

              <ul className='py-4 text-[14px] font-[500]'>
                <li className='list-disc'>
                  Very competitive remuneration package
                </li>
                <li className='list-disc'>
                  Build products for millions of users in Australia
                </li>
                <li className='list-disc'>
                  Hybrid and flexible working environment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Element tag */}
        <div className='col-md-12 item-card'>
          <div className='job-card super-hot relative flex h-full flex-col rounded-lg bg-[#fff4e9] pt-4'>
            <div className='grow px-4 md:px-3'>
              <div className='ilabel ilabel-warning absolute right-0'>
                {/* <IconFire width={12} height={15} /> */}
                HOT
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-[14px] font-[400] text-[#a6a6a6]'>
                  Posted 3 days ago
                </span>
              </div>

              <h3 className='mt-3 overflow-hidden text-[black]'>
                <a href='https://itviec.com/it-jobs/senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202?lab_feature=employer_job'>
                  Senior / Middle DevOps Engineer
                </a>
              </h3>

              <div className='my-2 flex items-center'>
                <a
                  href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  className='job-card-logo box-shadow-normal rounded border-solid'
                >
                  <img
                    alt='NAB Innovation Centre Vietnam Vietnam Small Logo'
                    src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/logo.jpg'
                    className='h-full object-contain'
                  />
                </a>

                <span className='ml-2 text-[14px] font-[400]'>
                  <a
                    className='overflow-hidden text-[#414042]'
                    href='https://itviec.com/companies/nab-innovation-centre-vietnam?lab_feature=employer_job'
                  >
                    NAB Innovation Centre Vietnam
                  </a>
                </span>
              </div>

              <div className='border-bottom-dashed flex items-center pb-3 font-[500] text-[#414042]'>
                <IconSalary className='h-[16px] w-[16px]' />
                <a
                  href='https://itviec.com/sign_in?job=senior-middle-devops-engineer-nab-innovation-centre-vietnam-3202'
                  className='pl-2 underline'
                >
                  Sign in to view salary
                </a>
              </div>

              <div className='border-bottom-dashed py-5'>
                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <svg
                      fill='none'
                      height='18'
                      viewBox='0 0 24 25'
                      width='16'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_947_6633)'>
                        <path
                          d='M19 14.625C19 13.6967 18.6312 12.8065 17.9749 12.1501C17.3185 11.4937 16.4283 11.125 15.5 11.125H8.5C7.57174 11.125 6.6815 11.4937 6.02513 12.1501C5.36875 12.8065 5 13.6967 5 14.625'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M12 8.5C13.933 8.5 15.5 6.933 15.5 5C15.5 3.067 13.933 1.5 12 1.5C10.067 1.5 8.5 3.067 8.5 5C8.5 6.933 10.067 8.5 12 8.5Z'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M11.5 18.9375H12.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <path
                          d='M4.56116 22.7812L2.90039 15.0938H21.0996L19.3696 22.7812'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                        ></path>
                        <line
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          stroke='currentColor'
                          x1='1'
                          x2='23'
                          y1='23.5'
                          y2='23.5'
                        ></line>
                      </g>
                      <defs>
                        <clipPath id='clip0_947_6633'>
                          <rect
                            fill='white'
                            height='24'
                            transform='translate(0 0.5)'
                            width='24'
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Hybrid
                  </span>
                </div>
                <div className='flex items-center'></div>

                <div className='flex items-center'>
                  <span className='leading-none text-[#a6a6a6]'>
                    <IconMapPin width={16} height={16} />
                  </span>

                  <span className='ml-2 text-[14px] font-[400] text-[#414042]'>
                    Ho Chi Minh - Ha Noi
                  </span>
                </div>

                <div className='flex flex-wrap gap-[12px] pt-[16px]'>
                  <a className='itag itag-sm itag-light'>DevOps</a>
                  <a className='itag itag-sm itag-light'>AWS</a>
                  <a className='itag itag-sm itag-light'>Cloud</a>
                </div>
              </div>

              <ul className='py-4 text-[14px] font-[500]'>
                <li className='list-disc'>
                  Very competitive remuneration package
                </li>
                <li className='list-disc'>
                  Build products for millions of users in Australia
                </li>
                <li className='list-disc'>
                  Hybrid and flexible working environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;
