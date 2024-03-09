// components/PDFDownloader.tsx

import React from 'react';

import { IconFileText } from '@/components/Icons';

interface PDFDownloaderProps {
  fileName: string;
  capacity: string;
}

const PDFDownloader: React.FC<PDFDownloaderProps> = ({
  fileName,
  capacity,
}) => {
  const downloadPDF = () => {
    // Tạo một tệp PDF mới
    const pdf = new Blob([fileName], { type: 'application/pdf' });

    // Tạo một URL cho tệp PDF
    const url = URL.createObjectURL(pdf);

    // Tạo một thẻ a để tải xuống tệp PDF
    const link = document.createElement('a');
    link.href = url;
    link.download = capacity + '.pdf';

    // Thêm thẻ a vào body và nhấp vào nó để bắt đầu quá trình tải xuống
    document.body.appendChild(link);
    link.click();

    // Loại bỏ thẻ a khỏi body sau khi tải xuống hoàn tất
    document.body.removeChild(link);
  };

  return (
    <a
      onClick={downloadPDF}
      className='border-silver-grey hover:text-red hover:border-red mr-2 inline-block cursor-pointer rounded-md border px-4 py-2'
    >
      <div className='flex flex-row items-center gap-2'>
        <IconFileText />
        <div>
          <p className='text-[16px]'>{fileName}</p>
          <p className=' text-[13px]'>{capacity}</p>
        </div>
      </div>
    </a>
  );
};

export default PDFDownloader;
