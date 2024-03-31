'use client';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
