'use client';

import { Combobox, InputBase, Tooltip, useCombobox } from '@mantine/core';
import { useState } from 'react';

import { IconChevronDown, IconSearch } from '@/components/Icons';
import { cn } from '@/lib/classNames';

interface Company {
  id: number;
  name: string;
}

const company: Company[] = [
  { id: 1, name: 'Dream Lab' },
  { id: 2, name: 'Unicloud Group' },
  { id: 3, name: 'CENTECH INTERACTIVE' },
  { id: 4, name: 'Hano Systems' },
  { id: 5, name: 'Sango Technologies Inc' },
  { id: 6, name: 'Osprey Technology' },
  { id: 7, name: 'IDLINKS' },
];

export default function Option() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [selected, setSelected] = useState<Company | null>(null);
  const [query, setQuery] = useState('');
  const [companyList, setCompanyList] = useState<Company[]>([]);
  const isSearchDisabled = companyList.length >= 5;

  // filter company
  const filteredCompanies =
    query === ''
      ? company.filter((comp) => !companyList.find((c) => c.id === comp.id))
      : company.filter((comp) =>
          comp.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  // select company
  const handleSelectCompany = (company: Company) => {
    if (companyList.length < 5) {
      setSelected(company);
      setCompanyList((prevList) => [...prevList, company]);
      setQuery('');
    }
  };

  // delete company
  const handleDeleteCompany = (id: number) => {
    setCompanyList((prevList) =>
      prevList.filter((company) => company.id !== id)
    );
  };

  return (
    <div>
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          const company = filteredCompanies.find(
            (c) => `${c.id}` === val
          ) as Company;
          setSelected(company);
          setQuery(company.name);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            disabled={isSearchDisabled}
            size='lg'
            leftSection={
              <div
                className={cn(
                  'flex h-full flex-1 items-center justify-center',
                  { 'bg-dark-gray': isSearchDisabled }
                )}
              >
                <IconSearch size={16} />
              </div>
            }
            classNames={{ input: 'pl-16' }}
            rightSection={<IconChevronDown />}
            rightSectionPointerEvents='none'
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => {
              combobox.closeDropdown();
              setSelected(selected || null);
            }}
            onChange={(event) => {
              combobox.updateSelectedOptionIndex();
              setQuery(event.currentTarget.value);
            }}
            placeholder='Company'
            value={query}
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <Combobox.Option
                  key={company.id}
                  className={cn(
                    'relative cursor-default select-none py-2 pl-12 pr-4 text-gray-900',
                    {
                      // 'bg-red-50': active,
                    }
                  )}
                  value={`${company.id}`}
                  onClick={() => handleSelectCompany(company)}
                >
                  <span
                    className={cn('block truncate font-normal', {
                      'font-medium': selected?.id === company.id,
                    })}
                  >
                    {company.name}
                  </span>
                </Combobox.Option>
              ))
            ) : (
              <Combobox.Empty>Nothing found.</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      {/* list company */}
      <div className='mt-4'>
        <div className='px-4'>
          <ol className='list-decimal underline underline-offset-1'>
            {companyList.map((company) => (
              <li key={company.id} className='mb-2'>
                <div className='flex flex-row items-center justify-between'>
                  {company.name}
                  <button onClick={() => handleDeleteCompany(company.id)}>
                    <Tooltip
                      label={
                        <div className='rounded-md bg-black px-4 py-2 text-[#ffff]'>
                          <div className='text-tiny text-center'>
                            <p>Delete</p>
                          </div>
                        </div>
                      }
                    >
                      <svg
                        width='18px'
                        height='18px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17'
                          stroke='#000000'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </Tooltip>
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
