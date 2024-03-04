export interface ApplyJobInput {
  user_id: number;
  job_id: number;
  cv: number;
  cover_letter: string;
}

export interface Job {
  job_id: number;
  company_id: number;
  working_location: number;
  name: string;
  salary: number;
  country: string;
  skills: string;
  working_type: string;
  overview: string;
  top_3_reason: string;
  job_description: string;
  skill_demand: string;
  why_you_love_working_here: string;
}