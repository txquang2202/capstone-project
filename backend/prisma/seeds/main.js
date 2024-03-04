const user = require("./mocks/user/user.json");
const user_education = require("./mocks/user/user_education.json");
const user_award = require("./mocks/user/user_award.json");
const user_certificate = require("./mocks/user/user_certificate.json");
const user_cv = require("./mocks/user/user_cv.json");
const user_project = require("./mocks/user/user_project.json");
const user_skill = require("./mocks/user/user_skill.json");
const user_work_experience = require("./mocks/user/user_work_experience.json");
const user_job_preferences = require("./mocks/user/user_job_preferences.json");

const blog = require("./mocks/blog/blog.json");
const tag = require("./mocks/blog/tag.json");
const blog_tag = require("./mocks/blog/blog_tag.json");

const company = require("./mocks/company/company.json");
const company_location = require("./mocks/company/company_location.json");
const company_benefit = require("./mocks/company/company_benefit.json");
const company_key_skill = require("./mocks/company/company_key_skill.json");

const review = require("./mocks/review/review.json");
const review_rating = require("./mocks/review/review_rating.json");

const job = require("./mocks/company/job/job.json");
const job_working_location = require("./mocks/company/job/job_working_location.json");

const follow = require("./mocks/company/follow.json");
const job_saved = require("./mocks/company/job/job_saved.json");

const apply = require("./mocks/company/job/apply.json");

/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const database = {
    user,
    user_education,
    user_award,
    user_certificate,
    user_cv,
    user_project,
    user_skill,
    work_experience: user_work_experience,
    job_preferences: user_job_preferences,
    blog,
    tag,
    blog_tag,
    company,
    company_location,
    company_benefit,
    company_key_skill,
    review,
    review_rating,
    job,
    job_working_location,
    follow,
    job_saved,
    job_apply: apply,
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, _] of Object.entries(database)) {
    // eslint-disable-next-line no-await-in-loop
    await prisma[key].deleteMany();
    console.log(`Deleted ${key}!`);
  }

  for (const [key, value] of Object.entries(database)) {
    await prisma[key].createMany({
      data: value,
      // skipDuplicates: true,
    });
    console.log(`Seeded ${key}!`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
