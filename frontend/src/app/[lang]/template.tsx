'use client';

import { useParams } from 'next/navigation';

import useLocaleConfig from '@/hooks/useLocaleConfig';
import { LocaleProvider } from '@/locale';

export default function Template({ children }: { children: React.ReactNode }) {
  const params = useParams();

  const { locale } = useLocaleConfig(params?.lang as string);

  return (
    <LocaleProvider {...locale}>
      <>{children}</>
    </LocaleProvider>
  );
}
