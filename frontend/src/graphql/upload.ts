import { gql } from '@apollo/client';

export const UPLOAD_FILE = gql`
  mutation UploadFile($prefix: String!, $file: Upload!) {
    singleUpload(prefix: $prefix, file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;
export type FilePayload = {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
};

export type UploadFileResponse = DataResponse<'singleUpload', FilePayload>;

export type UploadFileVariable = {
  prefix: string;
  file: File;
};
