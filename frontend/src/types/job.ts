import { type Company } from './company';

export type Job = {
  company_id: string;
  company: Company;
  country: string;
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
  hide_salary: boolean;
  top_3_reason: string;
  why_you_love_working_here: string;
  working_type: WorkingType;
  was_applied?: boolean;
};

export type JobApplication = {
  id: string;
  cv: string;
  cover_letter: string;
  date_apply: Date;
  status: string;
  job: Job;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    imgUrl: string;
  };
};

export enum WorkingType {
  AtOffice = 'At office',
  Hybrid = 'Hybrid',
  Remote = 'Remote',
}
