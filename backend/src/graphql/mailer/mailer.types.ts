export type MailerBody = {
  fieldName?: string;
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
};

export interface MailerResponse {
  sendTo: String;
  message: String;
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
