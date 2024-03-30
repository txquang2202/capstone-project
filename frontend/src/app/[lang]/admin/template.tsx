'use client';

import { Layout } from '@/components/Admin';

export default function Template({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>;
}
