'use client';

import CompanyCard from '@/components/CompanyPage/CompanyCard';

// import AppliedManagement from '@/components/JobAppliedManagementPage/AppliedManagement';

export default function JobManageMentPage() {
  return (
    <main>
      <section className=' scroll-smooth bg-[#f2f2f2]  focus:scroll-auto '>
        {/* Info Company */}
        <CompanyCard />
        {/* <Navigation selected='' /> */}
        {/* <AppliedManagement /> */}
        {/*  */}
      </section>
    </main>
  );
}
