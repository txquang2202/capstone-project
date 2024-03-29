'use client';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

import { IconArrowRightCircle } from '@/components/Icons';
import {
  CREATE_COMPANY,
  CreateCompaCompanyResponse,
  CreateCompaCompanyVariable,
} from '@/graphql/company';
import { useForm } from '@/hooks/useForm';

import { Button } from '../Button';
import { InputBox } from '../InputBox';

type Form = {
  representative: string;
  representativePosition: string;
  email: string;
  phone: string;
  companyName: string;
  country: string;
  companyWebsite?: string;
};

const EmployerContact = () => {
  const router = useRouter();

  const [mutate, { loading }] = useMutation<
    CreateCompaCompanyResponse,
    CreateCompaCompanyVariable
  >(CREATE_COMPANY);

  const { fields, onChangeField, handleSubmit } = useForm<Form>({
    defaultState: {
      representative: '',
      representativePosition: '',
      email: '',
      phone: '',
      companyName: '',
      country: '',
      companyWebsite: '',
    },
    config: {
      representative: { required: true },
      representativePosition: { required: true },
      email: { required: true },
      phone: { required: true },
      companyName: { required: true },
      country: { required: true },
    },
  });

  const onSubmit = () => {
    console.log(fields);
    mutate({
      variables: {
        input: {
          representative: fields.representative,
          representative_position: fields.representativePosition,
          email: fields.email,
          phone: fields.phone,
          company_name: fields.companyName,
          country: fields.country,
          company_website: fields.companyWebsite || '',
        },
      },
      onError: (err) => {
        console.log(err);
      },
      onCompleted: () => {
        router.push('/');
      },
    });
    // event.preventDefault();
    // console.log(fields);
  };

  return (
    <section className='employer-contact-container'>
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
                        onChangeField('representative', e.target.value)
                      }
                      value={fields.representative}
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
                      onChange={(e) => onChangeField('email', e.target.value)}
                      value={fields.email}
                      type='text'
                      name='contact_request[name]'
                      label='Email làm việc'
                      required
                      error='Vui lòng điền email của bạn'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                    <InputBox
                      onChange={(e) => onChangeField('phone', e.target.value)}
                      value={fields.phone}
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
                      onChange={(e) => onChangeField('country', e.target.value)}
                      value={fields.country}
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
                        onChangeField('companyWebsite', e.target.value)
                      }
                      value={fields.companyWebsite}
                      type='text'
                      name='contact_request[name]'
                      label='Địa chỉ website'
                      error='Vui lòng điền địa chỉ website'
                      floatingclass='mb-6 w-full lg:mb-0 lg:me-6'
                    />
                  </div>
                  <div className='space-x-2'>
                    <input
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
                        target='_blank'
                        href='/customer/login'
                      >
                        Đăng nhập
                      </a>
                    </div>
                    <div className='flex justify-center'>
                      <Button
                        loading={loading}
                        onClick={() => handleSubmit(onSubmit)}
                        intent='primary'
                        size='xl'
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
