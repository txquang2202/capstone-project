'use client';

import { useSuspenseQuery } from '@apollo/client';

import { CompanyItem } from '@/components/Search';
import { routes } from '@/configs/router';
import { GET_COMPANIES } from '@/graphql/company';
import useAppRouter from '@/hooks/useAppRouter';
import { Company } from '@/types/company';

export default function Page() {
  const {
    data: { companies },
  } = useSuspenseQuery<DataResponse<'companies', Company[]>>(GET_COMPANIES);
  const router = useAppRouter();

  // const enabledCompanies = companies.filter((company) => company.enable);

  return (
    <div className='grid grid-cols-3 gap-4 p-5 '>
      {companies.map((company) => (
        <div key={company.id} className='cursor-pointer rounded shadow'>
          <CompanyItem
            {...company}
            onSelect={() =>
              router.push(
                routes.customerCompanyDetail.pathParams({
                  id: company.id,
                })
              )
            }
          />
        </div>
      ))}
    </div>
  );
}
