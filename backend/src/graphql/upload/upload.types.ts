import { ReadStream } from "fs";

export type File = {
  fileName: string;
  mimeType: string;
  encoding: string;
  stream?: ReadStream;
};

export interface UploadedFileResponse {
  fileName: string;
  mimeType: string;
  encoding: string;
  url: string;
}

export interface IUploader {
  singleFileUploadResolver: (
    parent: any,
    { file }: { file: Promise<File> },
  ) => Promise<UploadedFileResponse>;
}
