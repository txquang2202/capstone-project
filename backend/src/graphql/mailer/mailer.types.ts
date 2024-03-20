export type MailerBody = {
  fieldName?: string;
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
};

export type MailerVars = {
  subject: string;
  title: string;
  preheader: string;
  big_heading: string;
  prev_content: string;
  verification_code: string;
  after_content: string;
  cheers: string;
  footer_content: string;
  contact: string;
};

export interface MailerResponse {
  sendTo: string;
  message: string;
  sentDate: Date;
}

export interface IMailerApiClient {
  sendEmail: (
    parent: any,
    {
      email,
      subject,
      content,
    }: { email: string; subject: string; content: string },
  ) => Promise<MailerResponse>;
}
