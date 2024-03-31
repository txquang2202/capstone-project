'use client';

import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import AdminCompanyGeneralInformation from '@/components/CompanyPage/adminGeneralInformation';
import AdminCompanyOverview from '@/components/CompanyPage/adminOverview';
import { routes } from '@/configs/router';
import { DELETE_COMPANY, UPDATE_COMPANY } from '@/graphql/company';
import { Company } from '@/types/company';

import { Button } from '../Button';
import AdminCompanyCard from '../CompanyPage/adminCompanyCard';
import AdminCompanyLocation from '../CompanyPage/adminLocation';
import UpdateCompanyModals from './updateCompanyModal';

type Props = {
  company: Company;
};
const CompanyDetail = ({ company }: Props) => {
  const router = useRouter();

  const [deleteCompany] = useMutation(DELETE_COMPANY);
  const [updateCompany] = useMutation(UPDATE_COMPANY);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdateCompany = async (data: unknown) => {
    try {
      await updateCompany({ variables: { input: data } });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCompany = async () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this company ?'
    );
    if (isConfirmed) {
      try {
        await deleteCompany({ variables: { deleteCompanyId: company.id } });
        router.push(routes.customerCompanyList.path);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className='mx-6 pb-2 pt-6'>
      {/* Company Description */}
      <AdminCompanyCard company={company} />
      <AdminCompanyGeneralInformation company={company} />
      <AdminCompanyOverview company={company} />
      <AdminCompanyLocation company={company} />
      <div className='mt-6 flex justify-end gap-3'>
        <Button
          intent='primary'
          size='small'
          onClick={() => setIsUpdateModalOpen(true)}
        >
          Update this company
        </Button>
        <Button intent='secondary' size='small' onClick={handleDeleteCompany}>
          Delete this company
        </Button>

        {isUpdateModalOpen && (
          <UpdateCompanyModals
            company={company}
            onClose={() => setIsUpdateModalOpen(false)}
            onUpdate={handleUpdateCompany}
          />
        )}
      </div>
    </div>
  );
};

export default CompanyDetail;
