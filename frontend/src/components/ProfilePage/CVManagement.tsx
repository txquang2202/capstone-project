'use client';

import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';

import { IconEye, IconFileText } from '@/components/Icons';
// import CVUploader from '@/components/ProfilePage/CVUploader';
import {
  FilePayload,
  UPLOAD_FILE,
  UploadFileResponse,
  UploadFileVariable,
} from '@/graphql/upload';
import { useForm } from '@/hooks/useForm';
import { useLocale } from '@/locale';

type Form = {
  cv: string;
  coverLetter?: string;
};

export default function CVManagement() {
  const { t } = useLocale();
  const [uploadFile, { loading: loadingUploadFile }] = useMutation<
    UploadFileResponse,
    UploadFileVariable
  >(UPLOAD_FILE);
  const [fileData, setFileData] = useState<FilePayload | null>(null);

  const { error, setError, onChangeField } = useForm<Form>({
    defaultState: { cv: '', coverLetter: '' },
    config: { cv: { required: { value: true, message: 'requiredText' } } },
  });

  const uploadCv = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 3145728) {
      setError((prev) => ({ ...prev, cv: 'maxSizeText' }));
    } else {
      const fileData = await uploadFile({ variables: { prefix: 'usr', file } });

      onChangeField('cv', fileData?.data?.singleUpload?.url as string);
      if (fileData?.data?.singleUpload?.url) {
        setFileData(fileData?.data?.singleUpload);
      }
    }
  };

  return (
    <div className='rounded-md bg-[#ffff] shadow-md'>
      <div className='flex flex-col flex-wrap px-7 pb-6 pt-6'>
        <h3>{t('Manage CVs')}</h3>
        <p className='mt-6'>
          {t(
            'Upload your CV below to use it throughout your application process'
          )}
        </p>
        <div className='mt-6'>
          {/* <CVUploader onFileChange={handleFileChange} /> */}
          <div className='border-silver-grey w-full rounded-md border'>
            <div className='flex flex-wrap items-start justify-between p-4'>
              <div className='flex flex-row items-start gap-2'>
                <IconFileText size={32} />
                <div className='mt-[-2px]'>
                  <span className='font-semibold'>{t('Your own CV')}</span>
                  <div className='mt-2'>
                    {error.cv && (
                      <div className='text-primary mt-1'>Can't be blank</div>
                    )}
                    {loadingUploadFile && (
                      <img
                        src='/images/loading.gif'
                        alt='loading'
                        className='mt-2 h-6 w-6'
                      />
                    )}
                    {fileData && (
                      <a
                        href={fileData.url}
                        className='text-hyperlink mt-3 flex items-center gap-2'
                      >
                        {fileData.filename}
                        <IconEye size={20} />
                      </a>
                    )}
                  </div>
                  <div className='mt-3'>
                    <input
                      type='file'
                      placeholder='Upload new CV'
                      className=''
                      onChange={uploadCv}
                      accept='application/doc,application/docx,application/pdf'
                    />
                  </div>
                  <p className='mt-2 text-[14px]'>
                    (
                    {t(
                      'Use .doc, .docx or .pdf files, 3MB and no password protected'
                    )}
                    )
                  </p>
                </div>
              </div>
              <div className='flex flex-row items-center justify-between gap-1 rounded bg-gray-200 px-3 py-1'>
                <svg
                  width='18px'
                  height='18px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 12.6111L8.92308 17.5L20 6.5'
                    stroke='#000000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <p>{t('Default')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
