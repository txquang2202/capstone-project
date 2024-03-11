import { MailerVars } from "./mailer.types";

export const APPLIED_JOB_VARS: MailerVars = {
  subject: "You submitted a job application",
  title: "You submitted a job application",
  preheader: "Congrats! You're one step closer to your dream job.",
  big_heading: "Congrats!",
  prev_content:
    "Your application has been submitted successfully for the position of",
  verification_code: "Software Engineer",
  after_content: "Please wait for the company to contact you through email.",
  cheers: "Cheers",
  footer_content: "We hope you can find the job of your dreams.",
  contact:
    "If you have any questions, send us an email to support@findyourjob.tech",
};

export const APPROVED_JOB_VARS: MailerVars = {
  subject: "You got the job",
  title: "You got the job",
  preheader: "Congrats! You got the job you applied for.",
  big_heading: "Congrats!",
  prev_content:
    "Your application has been approved successfully for the position of",
  verification_code: "Software Engineer",
  after_content: "Thanks for using our service.",
  cheers: "Cheers",
  footer_content: "We hope you can advance in your career.",
  contact:
    "If you have any questions, send us an email to support@findyourjob.tech",
};
