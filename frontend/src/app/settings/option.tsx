import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Tooltip } from '@nextui-org/tooltip';

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

export default function Example() {
  const [selected, setSelected] = useState<Company | null>(null);
  const [query, setQuery] = useState<string>('');
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
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative mt-1 '>
          <div
            className={`relative flex w-full cursor-default flex-row items-start overflow-hidden rounded border border-gray-300 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm ${
              isSearchDisabled ? 'bg-gray-400' : ''
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className={`ml-4 mt-3 h-6 w-6 `}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>

            <Combobox.Input
              className={`w-full border-none px-3 py-4 text-lg leading-5 text-gray-900 focus:ring-0 ${
                isSearchDisabled ? 'bg-gray-400' : ''
              }`}
              displayValue={(company) =>
                typeof company === 'object' && company !== null
                  ? (company as Company).name
                  : ''
              }
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Company'
            />

            <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-lg shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-lg'>
              {filteredCompanies.length === 0 && query !== '' ? (
                <div className='relative cursor-default select-none  py-2 pl-12  text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredCompanies.map((company) => (
                  <Combobox.Option
                    key={company.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-12 pr-4 ${
                        active ? 'bg-red-50 ' : 'text-gray-900'
                      }`
                    }
                    value={company}
                    onClick={() => handleSelectCompany(company)}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {company.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
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
                      content={
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
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
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
