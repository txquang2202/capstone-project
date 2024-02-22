'use client';

import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { Button } from '@/components/Button';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <RiAlarmWarningFill
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Oops, something went wrong!
          </h1>
          <Button onClick={reset} className='mt-4'>
            Try again
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Error;
