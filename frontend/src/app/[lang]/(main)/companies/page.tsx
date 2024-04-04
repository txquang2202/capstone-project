'use client';

import CompanyBody from '@/components/CompanyPage/CompanyBody';
import CompanyCard from '@/components/CompanyPage/CompanyCard';

export default function CompanyPage() {
  return (
    <main className='companies-landing-container'>
      <CompanyCard />
      <CompanyBody />
    </main>
  );
}
