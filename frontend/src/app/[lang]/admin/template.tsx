'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '@/components/Admin';

const queryClient = new QueryClient();
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>{children}</Layout>;
    </QueryClientProvider>
  );
}
