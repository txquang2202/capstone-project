import mailerService from "../../services/mailer";

const Mutation = {
  sendEmail: (
    _: any,
    {
      email,
      subject,
      content,
    }: { email: string; subject: string; content: string },
  ) => {
    return mailerService.sendEmail({ email, subject, content });
  },
};

export default { Mutation };
