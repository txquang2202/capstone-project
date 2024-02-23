import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// how to use cn()
// import { cn } from '@/lib/classNames';
//
// <span
//                 onClick={() => onChangeLang('en')}
//                 className={cn('cursor-pointer', {
//                   'text-white': _locale === 'en',
//                 })}
//               >
//                 {t('enText')}
//               </span>
