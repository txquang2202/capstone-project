'use client';

import Footer from '@/components/Layout/BlogFooter';
import Navbar from '@/components/Layout/BlogNavbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
