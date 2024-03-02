export interface CompanyReviewInput {
  company_id: number;
  user_id: number;
  over_rating: number;
  summary: string;
  ot_satisfy: number;
  ot_satisfy_reason: string;
  input_experience: string;
  input_improvement_suggestion: string;
  is_recommned: boolean;
}
export interface UpdateCompanyReviewInput {
  over_rating: number;
  summary: string;
  ot_satisfy: number;
  ot_satisfy_reason: string;
  input_experience: string;
  input_improvement_suggestion: string;
  is_recommned: boolean;
}
