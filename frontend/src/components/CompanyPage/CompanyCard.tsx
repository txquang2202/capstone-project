'use client';

import { Button } from '@/components/Button';
import {IconMapPin, IconBriefcase, IconStar} from '@/components/Icons';
import { useEffect, useState } from 'react';


const CompanyCard = () => {
    const [rate, setRate] = useState(4.5)
    const [widthRate, setWidthRate] = useState(0)

    useEffect(() => {
        const roundedRate = Math.round(rate * 100 / 5);
        setWidthRate(roundedRate);
    }, [])

  return (
    <div className='bg-gradient-search text-white ipt-6 ipb-8 ipy-md-8 company-info px-[30px] py-[30px]'>
        <div className="icontainer">
            <div className="grid md:grid-cols-6">
                <div className="col-span-4">
                    <div className="flex md:flex-row flex-column">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="logo text-center ime-md-6">
                            <img
                                alt='hide-the-best-it'
                                className='w-full'
                                src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--89a7283b6fdfb4208cdc2b440a36613a6fae974c/logo.jpg'
                            />
                            </div>

                        </div>

                        {/* Company's Info */}
                        <div>
                            <h1 className='text-center text-md-start ipt-4 ipb-2 ipt-md-0'>
                                NAB Innovation Centre Vietnam
                            </h1>
                            <div className='flex md:flex-row flex-column'>
                                <div className="flex gap-x-[8px] justify-center pb-[8px] md:pb-0 md:pr-[24px]">
                                    <span>
                                        <IconMapPin width={16} height={16} />
                                    </span>
                                    <div className='text-sm font-normal'>
                                        {/* Address */}
                                        District 4, Ho Chi Minh
                                    </div>
                                </div>
                                <div className="flex gap-x-[8px] justify-center cursor-pointer">
                                    <span>
                                        <IconBriefcase width={16} height={16} />
                                    </span>
                                    <div className='text-sm font-normal underline'>
                                        {/* Address */}
                                        12 job openings
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-x-[12px] pt-[24px] ipb-md-0'>
                                <Button intent='primary' size='large' className='min-w-[180px]'>
                                    Write review
                                </Button>
                                <Button intent='secondary' size='large' className='min-w-[180px]'>
                                    Follow
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <a className='flex bg-[#ffffff0d] w-full rounded p-[16px] mt-[24px] md:mt-[0px]'>
                        {/* Rating and reviews */}
                        <div className="flex pr-[12px] md:pr-[16px] items-center">
                            <h1 className='pr-[8px] md:pr-[12px]'>{rate}</h1>
                            <div className="flex-col">
                                {/* Stars */}
                                <div className='w-[88px] h-[16px] text-[#dedede] relative'>
                                    <div className='absolute inline-flex gap-[2px]'>
                                        <IconStar width={16} height={16} />
                                        <IconStar width={16} height={16} />
                                        <IconStar width={16} height={16} />
                                        <IconStar width={16} height={16} />
                                        <IconStar width={16} height={16} />
                                    </div>
                                    <div className={`flex items-center overflow-hidden absolute`} style={{width: `${widthRate}%`}}>
                                        <div className="inline-flex gap-[2px] text-[#ff9119]">
                                            <IconStar width={16} height={16} className='fill-current'/>
                                            <IconStar width={16} height={16} className='fill-current'/>
                                            <IconStar width={16} height={16} className='fill-current'/>
                                            <IconStar width={16} height={16} className='fill-current'/>
                                            <IconStar width={16} height={16} className='fill-current'/>                                        
                                        </div>
                                    </div>
                                </div>

                                {/* Number of reviews */}
                                <div className='text-[12px] md:text-[14px] pt-[4px]'>44 reviews</div>
                            </div>
                        </div>

                        {/* Percentage recommend*/}
                        <div className="flex items-center">
                            <div className="flex items-baseline pr-[8px] md:pr-[12px]">
                                <h1>97</h1>
                                <div className='text-[14px] font-[400]'>%</div>
                            </div>
                            <div className='text-[12px] md:text-[14px]'>
                                Recommend working here to a friend
                            </div>    
                        </div>    
                    </a>
                    <div className='pt-[24px] md:pt-[20px] text-center'>
                        <a /*href="/vietnam-best-it-companies" */ href="#" className='flex justify-center'>
                            <img
                                alt='hide-the-best-it'
                                className='w-[240px] h-auto'
                                src='https://itviec.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXVVUUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ecab14a987bce6eaa6e360949ba0778c81a77034/Logo%20VBIT%202024-04.png'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
  </div>
  );
}

export default CompanyCard;
