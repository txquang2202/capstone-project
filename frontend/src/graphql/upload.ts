import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation UploadFile($prefix: String!, $file: Upload!) {
    singleUpload(prefix: $prefix, file: $file) {
      filename
      mimetype
      encoding
      url
      size
      lastModified
    }
  }
`;
export type FilePayload = {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
  size: number;
  lastModified: Date;
};

export type UploadFileResponse = DataResponse<'singleUpload', FilePayload>;

export type UploadFileVariable = {
  prefix: string;
  file: File;
};
