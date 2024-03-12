'use client';

import { Layout } from '@/components/Customer';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
