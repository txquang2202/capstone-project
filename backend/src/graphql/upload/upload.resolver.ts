import s3Uploader from "../../services/s3";

const Mutation = {
  singleUpload: s3Uploader.singleFileUploadResolver.bind(s3Uploader),
};

export default { Mutation };
