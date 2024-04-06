import { useMutation } from '@apollo/client';
import React, { useState } from 'react';

import { Button } from '@/components/Button';
import { IconCamera, IconTrash2, IconX } from '@/components/Icons';
import { UPDATE_ATRIBUTES_USER } from '@/graphql/auth';
import useAuthData from '@/hooks/useAuthData';
import { useLocale } from '@/locale';

interface FormData {
  firstName: string;
  email: string;
  attributes: {
    avatarUrl?: string;
    dob?: string;
    location?: string;
    phone?: string;
    sex?: string;
  };
}

interface ModalProps {
  closeModal: () => void;
  userData: {
    attributes: {
      avatarUrl?: string;
      phone?: string;
      dob?: string;
      sex?: string;
      location?: string;
    };
    firstName?: string;
    email?: string;
  };
  onSave: (formData: FormData) => void;
}

const formatDateString = (dateString: string | undefined): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
};

const Modal: React.FC<ModalProps> = ({ closeModal, userData, onSave }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: userData?.firstName || '',
    email: userData?.email || '',
    attributes: {
      avatarUrl: userData?.attributes?.avatarUrl || '',
      dob: formatDateString(userData?.attributes?.dob),
      location: userData?.attributes?.location || '',
      phone: userData?.attributes?.phone || '',
      sex: userData?.attributes?.sex || '',
    },
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const { authUser } = useAuthData();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'firstName' || name === 'email') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (name === 'phoneNumber') {
      setFormData((prev) => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          phone: value,
        },
      }));
    } else if (name === 'dateOfBirth') {
      setFormData((prev) => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          dob: value,
        },
      }));
    } else if (name === 'gender') {
      setFormData((prev) => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          sex: value,
        },
      }));
    } else if (name === 'province') {
      setFormData((prev) => ({
        ...prev,
        attributes: {
          ...prev.attributes,
          location: value,
        },
      }));
    }

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, avatar: imageUrl }));
    }
  };

  const deleteImage = () => {
    setFormData((prev) => ({ ...prev, avatar: '' }));
  };

  const { t } = useLocale();

  const [updateUserMutation] = useMutation(UPDATE_ATRIBUTES_USER);

  const handleSave = async () => {
    const requiredFields: Array<keyof FormData> = ['firstName', 'attributes'];
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${t('This field is required')}`;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    try {
      await updateUserMutation({
        variables: {
          input: {
            firstName: formData.firstName?.toString(),
            email: formData.email?.toString(),
            attributes: {
              avatarUrl: formData.attributes.avatarUrl?.toString(),
              phone: formData.attributes.phone?.toString(),
              dob: formData.attributes.dob?.toString(),
              sex: formData.attributes.sex?.toString(),
              location: formData.attributes.location?.toString(),
            },
          },
          updateUserId: authUser?.id,
        },
      });
      onSave(formData);
      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const defaultAvatarSrc =
    'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg';

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-[#000000] bg-opacity-50 transition-opacity duration-1000'>
      <div className='h-[550px] w-[800px]  rounded-lg bg-white py-4'>
        <div className='flex flex-row justify-between px-6'>
          <h2>{t('Personal details')}</h2>
          <IconX onClick={() => closeModal()} className='cursor-pointer' />
        </div>
        <hr className='mt-4 h-[1px] w-full border-none bg-gray-200' />
        <div className='h-[420px] overflow-y-auto'>
          <div className='px-6 py-6'>
            {/* avatar */}
            <div className='mt-8 flex flex-col items-center justify-center'>
              <img
                src={formData.attributes.avatarUrl || defaultAvatarSrc}
                alt='Uploaded Image'
                className='h-28 w-28 rounded-full'
              />

              <input
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className=' hidden'
                id='fileInput'
              />
              <div className='mt-6 flex flex-row gap-2'>
                <label
                  htmlFor='fileInput'
                  className='text-red flex cursor-pointer items-center text-[16px]'
                >
                  <IconCamera className='h-4' />
                  {t('Edit')}
                </label>
                {formData.attributes.avatarUrl && (
                  <label
                    onClick={deleteImage}
                    className='flex cursor-pointer items-center text-[16px]'
                  >
                    <IconTrash2 className='h-4' />
                    {t('Delete')}
                  </label>
                )}
              </div>
            </div>

            <div className='mt-5 flex flex-col gap-2'>
              {/* Full name */}
              <div>
                <p>
                  {t('Full name')} <span className='text-red'>*</span>
                </p>
                <input
                  type='text'
                  name='firstName'
                  id='default-input'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  placeholder={t('Full name')}
                  required
                />
                {errors.firstName && (
                  <p className='text-red mt-1 text-xs'>{errors.firstName}</p>
                )}
              </div>

              {/* Email and Phone number */}
              <div className='flex flex-row justify-center gap-4'>
                <div className='w-full'>
                  <p>
                    {t('Email address')} <span className='text-red'></span>
                  </p>
                  <input
                    type='email'
                    name='email'
                    id='default-input'
                    value={formData.email}
                    onChange={handleChange}
                    className='focus:border-light-grey bg-light-grey focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                    placeholder={t('Email address')}
                    disabled
                  />
                  {errors.email && (
                    <p className='text-red mt-1 text-xs'>{errors.email}</p>
                  )}
                </div>
                <div className='w-full'>
                  <p>
                    {t('Phone number')} <span className='text-red'>*</span>
                  </p>
                  <input
                    type='text'
                    id='default-input'
                    name='phoneNumber'
                    value={formData.attributes.phone}
                    onChange={handleChange}
                    className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                    placeholder={t('Phone number')}
                    required
                  />
                  {errors.attributes?.phone && (
                    <p className='text-red mt-1 text-xs'>
                      {errors.attributes?.phone}
                    </p>
                  )}
                </div>
              </div>
              {/* birthday and Phone gender */}
              <div className='flex flex-row justify-center gap-4'>
                <div className='w-full'>
                  <p>
                    {t('Date of Birth')} <span className='text-red'>*</span>
                  </p>
                  <input
                    type='date'
                    id='default-input'
                    name='dateOfBirth'
                    value={formData.attributes.dob}
                    onChange={handleChange}
                    className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                    required
                  />
                  {errors.attributes?.dob && (
                    <p className='text-red mt-1 text-xs'>
                      {errors.attributes?.dob}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <p>{t('Gender')}</p>
                  <select
                    name='gender'
                    id='gender'
                    value={formData.attributes?.sex}
                    onChange={handleChange}
                    className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  >
                    <option value='Male'>{t('Male')}</option>
                    <option value='Female'>{t('Female')}</option>
                    <option value='Others'>{t('Others')}</option>
                  </select>
                </div>
              </div>
              {/* province and Phone address */}
              <div className='flex flex-row justify-center gap-4'>
                <div className='w-full'>
                  <p>
                    {t('Current province/city')}
                    <span className='text-red'>*</span>
                  </p>
                  <select
                    name='province'
                    id='province'
                    value={formData.attributes.location} // Lấy giá trị đầu tiên của mảng hoặc trả về chuỗi rỗng nếu mảng trống
                    onChange={handleChange}
                    className='focus:border-light-red focus:ring-light-red block w-full rounded-lg border border-gray-300 p-3.5 text-sm text-gray-900'
                  >
                    <option value='Ho Chi Minh'>Ho Chi Minh</option>
                    <option value='Ha Noi'>Ha Noi</option>
                    <option value='Da Nang'>Da Nang</option>
                    <option value='Others'>{t('Others')}</option>
                  </select>
                  {errors.attributes?.location && (
                    <p className='text-red mt-1 text-xs'>
                      {errors.attributes?.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='h-[1px] w-full border-none bg-gray-200' />
        {/* Save & Cancel */}
        <div className='px-6 py-3 text-end'>
          <Button
            intent='transparent'
            className='hover:text-dark-grey h-[36px] rounded px-12 py-2  text-center text-[16px] font-[600] hover:bg-gray-100'
            onClick={() => closeModal()}
          >
            {t('Cancel')}
          </Button>
          <Button
            onClick={handleSave}
            className='hover:text-dark-grey hover:bg-dark-red h-[36px] rounded px-12  py-2 text-center text-[16px] font-[600]'
          >
            {t('Save')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
