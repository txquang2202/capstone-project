'use client';

import CompanyCard from '@/components/CompanyPage/CompanyCard';
import CompanyReviewBody from '@/components/CompanyPage/CompanyReview';

export default function CompanyReviewPage() {
  return (
    <main className='companies-landing-container'>
      <CompanyCard />
      <CompanyReviewBody />
    </main>
  );
}
