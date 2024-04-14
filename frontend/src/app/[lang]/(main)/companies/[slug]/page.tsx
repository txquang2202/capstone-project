import { redirect } from 'next/navigation';

import CompanyBody from '@/components/CompanyPage/CompanyBody';
import CompanyCard from '@/components/CompanyPage/CompanyCard';
import { GET_COMPANY_BY_SLUG } from '@/graphql/company';
import { getClient } from '@/lib/client';

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  if (!slug) {
    return null;
  }

  const {
    data: { companyBySlug },
    loading,
  } = await getClient().query({
    query: GET_COMPANY_BY_SLUG,
    variables: {
      companySlug: slug,
    },
  });

  if (loading) return <div>Loading...</div>;

  if (companyBySlug === null) {
    console.log('Company not found');
    redirect('/');
  }

  return (
    <main className='companies-landing-container'>
      {companyBySlug !== null && (
        <div>
          <CompanyCard company={companyBySlug} />
          <CompanyBody company={companyBySlug} />
        </div>
      )}
    </main>
  );
}
