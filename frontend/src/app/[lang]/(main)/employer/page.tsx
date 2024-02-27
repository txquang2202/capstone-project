'use client';

import EmployerContact from '@/components/EmployerPage/Contact';
import EmployerDifference from '@/components/EmployerPage/Difference';
import EmployerHighValueServices from '@/components/EmployerPage/HighValueServices';
import EmployerIntroduction from '@/components/EmployerPage/Introduction';
import EmployerTopEmployers from '@/components/EmployerPage/TopEmployers';

export default function EmployerPage() {
  return (
    <main className='employer-landing-container'>
      <EmployerIntroduction />
      <EmployerDifference />
      <EmployerHighValueServices />
      <EmployerTopEmployers />
      <EmployerContact />
    </main>
  );
}
