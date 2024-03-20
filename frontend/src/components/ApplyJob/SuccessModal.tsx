import { useRouter } from 'next/navigation';

import { Button } from '../Button';
import { IconCheckCircle } from '../Icons';

const ApplyJobSuccessModal = () => {
  const router = useRouter();
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-black bg-opacity-75 opacity-75 transition-opacity' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                  <IconCheckCircle
                    className='text-orange h-[50px] w-[50px]'
                    aria-hidden='true'
                  />
                </div>
                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                  <h3
                    className='text-orange text-base text-lg font-semibold leading-6'
                    id='modal-title'
                  >
                    CONGRATULATIONS!
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-700'>
                      Your application has been submitted successfully. We will
                      contact you soon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <Button
                onClick={() => router.push('/my-jobs/applied')}
                size='small'
              >
                Back to applied job page
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobSuccessModal;
