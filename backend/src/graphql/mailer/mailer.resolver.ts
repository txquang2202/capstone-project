import mailerService from "../../services/mailer";

const Mutation = {
  sendEmail: mailerService.sendEmail.bind(mailerService),
};

export default { Mutation };
