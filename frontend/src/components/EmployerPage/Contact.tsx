'use client';

import { useMutation } from '@apollo/client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { IconArrowRightCircle } from '@/components/Icons';
import {
  CREATE_COMPANY_REQUEST,
  CreateCompanyRequestResponse,
  CreateCompanyRequestVariable,
} from '@/graphql/company';
import { useForm } from '@/hooks/useForm';
import { isNotEmpty } from '@/lib/validate';

import { Button } from '../Button';
import { InputBox } from '../InputBox';

type Form = {
  representativeName: string;
  representativePosition: string;
  representativeEmail: string;
  representativePhone: string;
  companyName: string;
  companyLocation: string;
  companyUrl: string;
};

const EmployerContact = () => {
  const router = useRouter();
  const [mutate] = useMutation<
    CreateCompanyRequestResponse,
    CreateCompanyRequestVariable
  >(CREATE_COMPANY_REQUEST);

  const [isFormValid, setIsFormValid] = useState(false);
  const [agreeLicense, setAgreeLicense] = useState(false);

  const { fields, onChangeField } = useForm<Form>({
    defaultState: {
      representativeName: '',
      representativePosition: '',
      representativeEmail: '',
      representativePhone: '',
      companyName: '',
      companyLocation: '',
      companyUrl: '',
    },
    config: {
      representativeName: { required: true },
      representativePosition: { required: true },
      representativeEmail: { required: true },
      representativePhone: { required: true },
      companyName: { required: true },
      companyLocation: { required: true },
    },
  });

  useEffect(() => {
    setIsFormValid(
      isNotEmpty(fields.representativeName) &&
        isNotEmpty(fields.representativePosition) &&
        isNotEmpty(fields.representativeEmail) &&
        isNotEmpty(fields.representativePhone) &&
        isNotEmpty(fields.companyName) &&
        isNotEmpty(fields.companyLocation) &&
        agreeLicense
    );
  }, [
    fields.representativeName,
    fields.representativePosition,
    fields.representativeEmail,
    fields.representativePhone,
    fields.companyName,
    fields.companyLocation,
    agreeLicense,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (e: any) => {
    e.preventDefault();
    mutate({
      variables: {
        input: {
          representative_name: fields.representativeName,
          representative_position: fields.representativePosition,
          representative_email: fields.representativeEmail,
          representative_phone: fields.representativePhone,
          company_name: fields.companyName,
          company_location: fields.companyLocation,
          company_weburl: fields.companyUrl || '',
        },
      },
      onError: (err) => {
        console.log(err);
      },
      onCompleted: () => {
        router.push('/');
      },
    });
  };

  return (
    <section className='employer-contact-container' id='contactme'>
      <div className='icontainer px-5 py-[120px]'>
        <div className='text-it-white'>
          <div className='lg-title'>Tìm kiếm Nhân tài IT phù hợp</div>
          <p className='normal-text pb-16 pt-6'>
            Để lại thông tin liên hệ để nhận tư vấn từ Phòng Chăm sóc Khách hàng
            của ITviec.
          </p>
        </div>
        <div className='flex'>
          <div className='contact-form text-it-white me-7'>
            <div className='section-wrapper'>
              <div className='rounded-lg bg-white p-8'>
                <form action=''>
                  <h3 className='text-it-black pb-4'>Thông tin quý khách</h3>
                  <div className='mb-6 lg:flex'>
                    <InputBox
                      onChange={(e) =>
                        onChangeField('representativeName', e.target.value)
                      }
                      value={fields.representativeName}
                      type='text'
                      name='contact_request[name]'
                      label='Họ và Tên'
                      required
                      error='Vui lòng điền tên của bạn'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                    <InputBox
                      onChange={(e) =>
                        onChangeField('representativePosition', e.target.value)
                      }
                      value={fields.representativePosition}
                      type='text'
                      name='contact_request[name]'
                      label='Chức vụ'
                      required
                      error='Vui lòng điền chức vụ của bạn'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <div className='mb-6 lg:flex'>
                    <InputBox
                      onChange={(e) =>
                        onChangeField('representativeEmail', e.target.value)
                      }
                      value={fields.representativeEmail}
                      type='text'
                      name='contact_request[name]'
                      label='Email làm việc'
                      required
                      error='Vui lòng điền email của bạn'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                    <InputBox
                      onChange={(e) =>
                        onChangeField('representativePhone', e.target.value)
                      }
                      value={fields.representativePhone}
                      type='text'
                      name='contact_request[name]'
                      label='Số điện thoại'
                      required
                      error='Vui lòng điền số điện thoại của bạn'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <h3 className='text-it-black pb-4'>Thông tin công ty</h3>
                  <div className='mb-6 lg:flex'>
                    <InputBox
                      onChange={(e) =>
                        onChangeField('companyName', e.target.value)
                      }
                      value={fields.companyName}
                      type='text'
                      name='contact_request[name]'
                      label='Tên công ty'
                      required
                      error='Vui lòng điền tên công ty'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <div className='mb-6 lg:flex'>
                    <InputBox
                      onChange={(e) =>
                        onChangeField('companyLocation', e.target.value)
                      }
                      value={fields.companyLocation}
                      type='text'
                      name='contact_request[name]'
                      label='Địa chỉ công ty'
                      required
                      error='Vui lòng điền địa chỉ công ty'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <div className='mb-6 lg:flex'>
                    <InputBox
                      onChange={(e) =>
                        onChangeField('companyUrl', e.target.value)
                      }
                      value={fields.companyUrl}
                      type='text'
                      name='contact_request[name]'
                      label='Địa chỉ website'
                      error='Vui lòng điền địa chỉ website'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <div className='space-x-2'>
                    <input
                      checked={agreeLicense}
                      onChange={(e) => setAgreeLicense(e.target.checked)}
                      type='checkbox'
                      className='text-dark-grey focus:ring-silver-grey active:bg-silver-grey h-5 w-5 rounded focus:outline-none focus:ring'
                    />
                    <label htmlFor='' className='text-it-black'>
                      Tôi đã đọc và đồng ý với các Điều khoản dịch vụ và Chính
                      sách quyền riêng tư của ITviec liên quan đến thông tin
                      riêng tư của tôi.
                    </label>
                  </div>
                  <div className='mt-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between'>
                    <div className='mt-6 flex flex-col items-center lg:mt-0 lg:flex-row'>
                      <p className='text-it-black normal-text me-2'>
                        Đã có tài khoản Khách hàng?
                      </p>
                      <a
                        className='hyperlink'
                        href='#'
                        onClick={(e) => {
                          e.preventDefault();
                          signIn('keycloak');
                        }}
                      >
                        Đăng nhập
                      </a>
                    </div>
                    <div className='flex justify-center'>
                      <Button
                        // onClick={() => handleSubmit(onSubmit)}
                        onClick={(e) => onSubmit(e)}
                        intent='primary'
                        size='xl'
                        disabled={!isFormValid}
                      >
                        Liên hệ tôi
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='text-it-white contact-info mt-4 lg:mt-0'>
            <div className='contact-box mb-4 flex rounded-lg p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Hotline Hồ Chí Minh</p>
                <h3>0977 460 519</h3>
              </div>
            </div>
            <div className='contact-box mb-4 flex rounded-lg p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Hotline Hà Nội</p>
                <h3>0983 131 531</h3>
              </div>
            </div>
            <div className='contact-box mb-4 flex rounded-lg p-6'>
              <span className='text-it-red flex items-center'>
                <IconArrowRightCircle width={24} height={24} />
              </span>
              <div className='text-it-white ms-3'>
                <p className='normal-text'>Thời gian làm việc</p>
                <h3>Thứ 2 - Thứ 6 | 8:30 - 17:00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerContact;
