import { WorkingType } from '@/types/job';

export const HTTP_STATUS_CODE = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

export const SEARCH_OPTIONS = [
  {
    value: 'all',
    label: 'Tất cả thành phố',
  },
  {
    value: 'Ho Chi Minh',
    label: 'Ho Chi Minh',
  },
  {
    value: 'Ha Noi',
    label: 'Ha Noi',
  },
  {
    value: 'Da Nang',
    label: 'Da Nang',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

export const RANGE: Record<
  string,
  {
    unit: string;
    locale: string;
    range: [number, number];
    from: number;
    to: number;
    step: number;
  }
> = {
  VND: {
    unit: 'VND',
    locale: 'vi-VN',
    range: [0, 100_000_000],
    from: 10_000_000,
    to: 20_000_000,
    step: 1_000_000,
  },
  USD: {
    unit: 'USD',
    locale: 'en',
    range: [0, 200_000],
    from: 1_000,
    to: 2_000,
    step: 100,
  },
};

export const WORKING_TYPES = [
  { id: 1, text: WorkingType.AtOffice },
  { id: 2, text: WorkingType.Hybrid },
  { id: 3, text: WorkingType.Remote },
];

export const COMPANY_TYPES = [
  { id: 1, text: 'IT Outsourcing' },
  { id: 2, text: 'IT Product' },
  { id: 3, text: 'Headhunt' },
  { id: 4, text: 'IT Service and IT Consulting' },
  { id: 5, text: 'Non-IT' },
];

export const LEVELS = [
  { id: 1, text: 'Fresher' },
  { id: 2, text: 'Junior' },
  { id: 3, text: 'Senior' },
  { id: 4, text: 'Manager' },
];
