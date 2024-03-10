import { OAuth2Client } from "google-auth-library";
import * as MailerTypes from "src/graphql/mailer/mailer.types";
const nodemailer = require("nodemailer");
require("dotenv").config();

export interface MailerConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  hostEmail: string;
}

export class MailerApiClient implements MailerTypes.IMailerApiClient {
  private config: MailerConfig;
  private oauthClient;

  constructor(
    config: MailerConfig = {
      clientId: process.env.CLIENT_ID || "client_id",
      clientSecret: process.env.CLIENT_SECRET || "client_secret",
      refreshToken: process.env.GOOGLE_MAILER_REFRESH_TOKEN || "refresh_token",
      hostEmail: process.env.ADMIN_EMAIL_ADDRESS || "hot@gmail.com",
    },
  ) {
    this.config = config;

    this.oauthClient = new OAuth2Client(
      this.config.clientId,
      this.config.clientSecret,
    );

    this.oauthClient.setCredentials({
      refresh_token: config.refreshToken,
    });
  }

  async sendEmail(
    _: any,
    {
      email,
      subject,
      content,
    }: { email: string; subject: string; content: string },
  ): Promise<MailerTypes.MailerResponse> {
    try {
      const myAccessTokenObject = await this.oauthClient.getAccessToken();
      const myAccessToken = myAccessTokenObject?.token;

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: this.config.hostEmail,
          clientId: this.config.clientId,
          clientSecret: this.config.clientSecret,
          refresh_token: this.config.refreshToken,
          accessToken: myAccessToken,
        },
      });

      const mailOptions = {
        from: `IT_VIEC <${this.config.hostEmail}>`,
        to: email,
        subject: subject,
        html: `<h3>${content}</h3>`,
      };

      await transport.sendMail(mailOptions);

      return {
        message: "Email sent successfully.",
        sendTo: email,
        sentDate: new Date(),
      };
    } catch (error) {
      console.log({ error });

      return {
        message: "Email sent with error: " + (error as Error).message,
        sendTo: email,
        sentDate: new Date(),
      };
    }
  }
}

const mailerService = new MailerApiClient();

export default mailerService;
