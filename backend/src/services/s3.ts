import AWS from "aws-sdk";
import * as ApolloServerFileUploads from "src/graphql/upload/upload.types";
import stream from "stream";

type S3UploadConfig = {
  accessKeyId: string;
  secretAccessKey: string;
  destinationBucketName: string;
  region?: string;
};

type S3UploadStream = {
  writeStream: stream.PassThrough;
  promise: Promise<AWS.S3.ManagedUpload.SendData>;
};

export class AWSS3Uploader implements ApolloServerFileUploads.IUploader {
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

  private createDestinationFilePath(
    fileName: string,
    mimeType: string,
    encoding: string,
  ): string {
    return fileName;
  }

  private createUploadStream(key: string): S3UploadStream {
    const pass = new stream.PassThrough();
    return {
      writeStream: pass,
      promise: this.s3
        .upload({
          Bucket: this.config.destinationBucketName,
          Key: key,
          Body: pass,
        })
        .promise(),
    };
  }

  async singleFileUploadResolver(
    parent: any,
    { file }: { file: Promise<ApolloServerFileUploads.File> },
  ): Promise<ApolloServerFileUploads.UploadedFileResponse> {
    const { stream, fileName, mimeType, encoding } = await file;

    const filePath = this.createDestinationFilePath(
      fileName,
      mimeType,
      encoding,
    );

    // Create an upload stream that goes to S3
    const uploadStream = this.createUploadStream(filePath);

    // Pipe the file data into the upload stream
    stream?.pipe(uploadStream.writeStream);

    // Start the stream
    const result = await uploadStream.promise;

    // Get the link representing the uploaded file
    const link = result.Location;

    return { fileName, mimeType, encoding, url: link };
  }
}

const s3Uploader = new AWSS3Uploader({
  accessKeyId: process.env.AWS_ACCESS_KEY || "",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  region: "ap-southest-1",
  destinationBucketName: "itviec-s3",
});

export default s3Uploader;
