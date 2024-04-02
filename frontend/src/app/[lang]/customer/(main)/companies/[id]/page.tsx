'use client';

import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

import { CompanyDetail } from '@/components/Customer';
import {
  GET_COMPANY,
  GetCompanyResponse,
  GetCompanyVariable,
} from '@/graphql/company';

export default function Page() {
  const params = useParams();
  const { data, loading } = useQuery<GetCompanyResponse, GetCompanyVariable>(
    GET_COMPANY,
    {
      variables: { companyId: params.id as string },
    }
  );

  if (loading) return <div>Loading...</div>;

  if (!data?.company) return <div>Not found</div>;

  return (
    <div className='mx-[100px] my-10 rounded'>
      <CompanyDetail company={data.company} />
    </div>
  );
}
