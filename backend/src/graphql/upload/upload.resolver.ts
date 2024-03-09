const Mutation = {
  singleUpload: async (parent, { file }) => {
    const { stream, filename, mimetype, encoding } = await file;

    return { filename, mimetype, encoding, url: "" };
  },
};

export default { Mutation };
