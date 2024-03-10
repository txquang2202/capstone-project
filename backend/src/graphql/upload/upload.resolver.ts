import s3Uploader from "../../services/s3";
const { GraphQLUpload } = require("graphql-upload-minimal");

const Query = {
  file: s3Uploader.getFileResolver.bind(s3Uploader),
};

const Mutation = {
  singleUpload: s3Uploader.singleFileUploadResolver.bind(s3Uploader),
};

export default { Query, Mutation, Upload: GraphQLUpload };
