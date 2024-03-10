import AWS from "aws-sdk";
import * as ApolloServerFileUploads from "src/graphql/upload/upload.types";
import stream from "stream";
require("dotenv").config();

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

  constructor(
    config: S3UploadConfig = {
      accessKeyId: process.env.AWS_ACCESS_KEY || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
      region: process.env.AWS_S3_REGION || "global",
      destinationBucketName: process.env.AWS_BUCKET_NAME || "",
    },
  ) {
    AWS.config = new AWS.Config();
    AWS.config.update({
      region: config.region,
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    });

    this.s3 = new AWS.S3({
      apiVersion: "2006-03-01",
    });
    this.config = config;
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

  async getFileResolver(
    _: any,
    { key }: { key: string },
  ): Promise<ApolloServerFileUploads.UploadedFileResponse> {
    try {
      const params = {
        Bucket: this.config.destinationBucketName,
        Key: key,
      };

      const headObjectOutput = await this.s3.headObject(params).promise();

      const filename = key.split("/").pop() || "";
      headObjectOutput.LastModified?.setTime(
        headObjectOutput.LastModified.getTime() + 7 * 60 * 60 * 1000,
      );

      const fileInfo: ApolloServerFileUploads.UploadedFileResponse = {
        filename,
        mimetype: headObjectOutput.ContentType || "",
        encoding: headObjectOutput.ContentEncoding || "",
        url: `https://${params.Bucket}.s3.${this.config.region}.amazonaws.com/${key}`,
        size: headObjectOutput.ContentLength || 0,
        lastModified: headObjectOutput.LastModified,
      };

      return fileInfo;
    } catch (error) {
      console.error("Error getting file info:", error);
      throw error;
    }
  }

  async singleFileUploadResolver(
    _: any,
    {
      prefix,
      file,
    }: { prefix: string; file: Promise<ApolloServerFileUploads.File> },
  ): Promise<ApolloServerFileUploads.UploadedFileResponse> {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const stream = createReadStream();

    // Create an upload stream that goes to S3
    const uploadStream = this.createUploadStream(prefix + "/" + filename);
    // Pipe the file data into the upload stream
    stream.pipe(uploadStream.writeStream);

    // Start the stream
    const result = await uploadStream.promise;
    const { size, lastModified } = await this.getFileResolver(_, {
      key: prefix + "/" + filename,
    });

    return {
      filename,
      mimetype,
      encoding,
      url: result.Location,
      size,
      lastModified,
    };
  }
}

const s3Uploader = new AWSS3Uploader();

export default s3Uploader;
