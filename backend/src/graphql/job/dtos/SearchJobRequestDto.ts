export type SearchJobRequestDto = {
  query: string;
  skip: number;
  take: number;
  address: string;
  unit: string;
  salaryFrom: number;
  salaryTo: number;
  companyType?: string[];
  workingType?: string[];
};
