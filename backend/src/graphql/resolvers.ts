import userResolver from "./user/user.resolver";
import job_applyResolver from "./job/job_apply.resolver";
import companyResolver from "./company/company.resolver";
import company_reviewResolver from "./company/company_review.resolver";
import blogResolver from "./blog/blog.resolver";
import jobResolver from "./job/job.resolver";
import uploadResolver from "./upload/upload.resolver";

export default [
  userResolver,
  job_applyResolver,
  companyResolver,
  company_reviewResolver,
  blogResolver,
  jobResolver,
  uploadResolver,
];
