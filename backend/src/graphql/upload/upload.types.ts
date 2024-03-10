export type File = {
  fieldName?: string;
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
};

export interface UploadedFileResponse {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
  size: number;
  lastModified?: Date;
}

export interface IUploader {
  singleFileUploadResolver: (
    parent: any,
    { prefix, file }: { prefix: string; file: Promise<File> },
  ) => Promise<UploadedFileResponse>;
}
