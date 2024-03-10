import { getUrl, storageRef, uploadFile } from '@/configs/firebase';

export const upload = async (file: File) => {
  const ref = storageRef(`cv/${file.name}`);
  const res = await uploadFile(file, ref);
  if (!res) return;
  const url = await getUrl(res.ref);
  return url;
};
