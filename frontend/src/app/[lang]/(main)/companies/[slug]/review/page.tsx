import { redirect } from 'next/navigation';

import CompanyCard from '@/components/CompanyPage/CompanyCard';
import CompanyReviewBody from '@/components/CompanyPage/CompanyReview';
import { GET_COMPANY_BY_SLUG } from '@/graphql/company';
import { getClient } from '@/lib/client';

// export default function CompanyReviewPage() {
//   return (
//     <main className='companies-landing-container'>
//       <CompanyCard />
//       <CompanyReviewBody />
//     </main>
//   );
// }

export default async function CompanyReviewPage({
  params,
}: {
  params: { slug: string };
}) {
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
          <CompanyReviewBody company={companyBySlug} />
        </div>
      )}
    </main>
  );
}
