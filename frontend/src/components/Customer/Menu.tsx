'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { getRouteByPath, routes } from '@/configs/router';
import { cn } from '@/lib/classNames';

import { AppLink } from '../AppLink';
import { Button } from '../Button';
import {
  IconAward,
  IconDollarSign,
  IconHome,
  IconList,
  IconPlusCircle,
  IconSettings,
} from '../Icons';

const data = [
  { link: routes.customerDashboard.path, label: 'Dashboard', icon: IconHome },
  { link: routes.customerJobList.path, label: 'Job list', icon: IconList },
  { link: '#', label: 'Ứng viên', icon: IconAward },
  { link: '#', label: 'Billing', icon: IconDollarSign },
  { link: '#', label: 'Settings', icon: IconSettings },
];

const Menu = () => {
  const path = usePathname();
  const active = useMemo(() => {
    const route = getRouteByPath(path)?.path;
    return data.findIndex((d) => d.link === route);
  }, [path]);

  const links = data.map((item, index) => (
    <AppLink
      className={cn(
        'hover:bg-dark flex items-center gap-3 px-8 py-5 font-normal',
        {
          'bg-dark font-bold': active === index,
        }
      )}
      data-active={index === active || undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon size={16} />
      <span className='uppercase'>{item.label}</span>
    </AppLink>
  ));

  return (
    <nav className='bg-gradient-search flex h-auto min-w-[250px] flex-col gap-4 pt-4 text-white'>
      <div className='sticky top-4 flex flex-col'>
        <Button
          href={routes.customerAddJob.path}
          icon={<IconPlusCircle size={24} />}
          className='mx-4 mb-4'
        >
          Add Job
        </Button>
        {links}
      </div>
    </nav>
  );
};

export default Menu;
