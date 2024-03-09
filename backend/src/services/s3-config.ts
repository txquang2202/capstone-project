import AWS from "aws-sdk";
import { UploadedFileResponse } from "src/graphql/upload/upload.types";

type S3UploadConfig = {
  accessKeyId: string;
  secretAccessKey: string;
  destinationBucketName: string;
  region?: string;
};

export class AWSS3Uploader {
  private s3: AWS.S3;
  public config: S3UploadConfig;

  constructor(config: S3UploadConfig) {
    AWS.config = new AWS.Config();
    AWS.config.update({
      region: config.region || "global",
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    });

    this.s3 = new AWS.S3();
    this.config = config;
  }

  async singleFileUploadResolver(
    parent: any,
    { file }: { file: Promise<File> },
  ): Promise<UploadedFileResponse> {
    // Todo next!
    return null;
  }
}
