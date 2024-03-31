import userResolver from "./user/user.resolver";
import job_applyResolver from "./job/job_apply.resolver";
import jobSaveResolver from "./job/job_save.resolver";
import companyResolver from "./company/company.resolver";
import company_reviewResolver from "./company/company_review.resolver";
import search_jobResolver from "./job/search_job.resolver";
import blogResolver from "./blog/blog.resolver";
import jobResolver from "./job/job.resolver";
import search_companyResolver from "./company/search_company.resolver";
import uploadResolver from "./upload/upload.resolver";
import mailerResolver from "./mailer/mailer.resolver";

export default [
  userResolver,
  jobResolver,
  search_jobResolver,
  job_applyResolver,
  jobSaveResolver,
  companyResolver,
  company_reviewResolver,
  search_companyResolver,
  blogResolver,
  jobResolver,
  uploadResolver,
  mailerResolver,
];
