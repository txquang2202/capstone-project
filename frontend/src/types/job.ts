import { type Company } from './company';

export type Job = {
  company_id: string;
  company: Company;
  country: null;
  date_posted: Date;
  id: string;
  is_closed: boolean;
  job_description: null;
  salary_from: number | null;
  salary_to: number | null;
  unit: string;
  name: string;
  skill_demand: string;
  skills: string;
  top_3_reason: string;
  why_you_love_working_here: string;
  working_type: WorkingType;
};

export enum WorkingType {
  AtOffice = 'At office',
  Hybrid = 'Hybrid',
  Remote = 'Remote',
}
