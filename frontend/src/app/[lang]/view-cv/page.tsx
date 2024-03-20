'use client';

export default function Page() {
  const url =
    'https://firebasestorage.googleapis.com/v0/b/itviec-14e86.appspot.com/o/cv%2FVyDo-Resume.pdf?alt=media&token=73fe207f-f369-462b-86a0-0a7899fdf983';

  return (
    <iframe src={url} style={{ width: '100%', minHeight: '100vh' }}></iframe>
  );
}
