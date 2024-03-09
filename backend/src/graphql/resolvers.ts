import userResolver from "./user/user.resolver";
import jobResolver from "./job/job.resolver";
import companyResolver from "./company/company.resolver";
import company_reviewResolver from "./company/company_review.resolver";
import search_jobResolver from "./job/search_job.resolver";
import blogResolver from "./blog/blog.resolver";

export default [
  userResolver,
  jobResolver,
  search_jobResolver,
  companyResolver,
  company_reviewResolver,
  blogResolver,
];
