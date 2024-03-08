'use client';

import { useParams } from 'next/navigation';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import useLocaleConfig from '@/hooks/useLocaleConfig';
import { LocaleProvider } from '@/locale';

export default function Template({ children }: { children: React.ReactNode }) {
  const params = useParams();

  const { locale } = useLocaleConfig(params?.lang as string);

  return (
    <LocaleProvider {...locale}>
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    </LocaleProvider>
  );
}
