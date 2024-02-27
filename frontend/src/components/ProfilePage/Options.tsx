'use client';

import { Combobox, InputBase, Tooltip, useCombobox } from '@mantine/core';
import { useState } from 'react';

import { IconChevronDown, IconSearch } from '@/components/Icons';
import { cn } from '@/lib/classNames';

interface skill {
  id: number;
  name: string;
}

const skill: skill[] = [
  { id: 1, name: '.NET' },
  { id: 2, name: 'ReactJS' },
  { id: 3, name: 'PHP' },
  { id: 4, name: 'NodeJS' },
  { id: 5, name: 'Java' },
  { id: 6, name: 'System Admin' },
  { id: 7, name: 'C++' },
];

export default function Options() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [selected, setSelected] = useState<skill | null>(null);
  const [query, setQuery] = useState('');
  const [skillList, setskillList] = useState<skill[]>([]);
  const isSearchDisabled = skillList.length >= 5;

  let countSkill: number = skillList.length;
  // filter skill
  const filteredCompanies =
    query === ''
      ? skill.filter((comp) => !skillList.find((c) => c.id === comp.id))
      : skill.filter((comp) =>
          comp.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  // select skill
  const handleSelectskill = (skill: skill) => {
    if (skillList.length < 5) {
      setSelected(skill);
      setskillList((prevList) => [...prevList, skill]);
      setQuery('');
    }
  };

  // delete skill
  const handleDeleteskill = (id: number) => {
    setskillList((prevList) => prevList.filter((skill) => skill.id !== id));
  };

  return (
    <div>
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          const skill = filteredCompanies.find(
            (c) => `${c.id}` === val
          ) as skill;
          setSelected(skill);
          setQuery(skill.name);
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
            placeholder='Skills'
            value={query}
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((skill) => (
                <Combobox.Option
                  key={skill.id}
                  className={cn(
                    'relative cursor-default select-none py-2 pl-12 pr-4 text-gray-900',
                    {
                      // 'bg-red-50': active,
                    }
                  )}
                  value={`${skill.id}`}
                  onClick={() => handleSelectskill(skill)}
                >
                  <span
                    className={cn('block truncate font-normal', {
                      'font-medium': selected?.id === skill.id,
                    })}
                  >
                    {skill.name}
                  </span>
                </Combobox.Option>
              ))
            ) : (
              <Combobox.Empty>Nothing found.</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      <p className='text-dark-grey mt-2 text-[12px]'>{countSkill} / 5 skills</p>
      {/* list skill */}
      <div className='mt-2 '>
        {skillList.map((skill) => (
          <div key={skill.id} className='mb-2 inline-block'>
            <div className='border-silver-grey bg-light-grey mr-4 flex flex-row justify-between gap-x-4 rounded-full border p-2'>
              {skill.name}
              <button
                className=' text-dark-grey text-[14px]'
                onClick={() => handleDeleteskill(skill.id)}
              >
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
