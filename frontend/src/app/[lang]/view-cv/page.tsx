'use client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
  const queries = useSearchParams();
  const url = `https://docs.google.com/gview?embedded=true&url=${queries?.get(
    'cv'
  )}`;

  return (
    <iframe src={url} style={{ width: '100%', minHeight: '100vh' }}></iframe>
  );
}
