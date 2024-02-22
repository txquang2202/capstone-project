import { ChangeEvent, useState } from 'react';

type Props = {
  onFileChange: (file: File) => void;
};

const CVUploader = ({ onFileChange }: Props) => {
  const [selectedFile, setSelectedFile] = useState<string | undefined>(
    undefined
  );
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileSize = file.size / 1024 / 1024; // Size in MB
      const allowedExtensions = ['doc', 'docx', 'pdf'];

      // Kiểm tra phần mở rộng của tệp
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        alert(
          'Chỉ được phép tải lên các tệp có phần mở rộng .doc, .docx hoặc .pdf'
        );
        return;
      }

      // Kiểm tra kích thước của tệp
      if (fileSize > 3) {
        alert('Kích thước tệp không được vượt quá 3MB');
        return;
      }

      // Kiểm tra xem tệp có được bảo vệ bằng mật khẩu không
      if (file.type === 'application/pdf' && file.type.includes('encrypted')) {
        alert('Tệp PDF được bảo vệ bằng mật khẩu không được phép');
        return;
      }

      setSelectedFile(file.name);

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = '' + (currentDate.getMonth() + 1);
      let day = '' + currentDate.getDate();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      const formattedDate = [day, month, year].join('/');
      setSelectedDate(formattedDate);

      onFileChange(file); // Gọi hàm callback để truyền tệp đã chọn ra ngoài
    }
  };

  return (
    <div className='border-gray-250 w-full rounded-md border'>
      <div className='flex flex-wrap items-start justify-between p-4'>
        <div className='flex flex-row items-start gap-2 '>
          <svg
            fill='#000000'
            width='36px'
            height='36px'
            viewBox='0 0 32 32'
            data-name='Layer 1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect height='1' width='12' x='10' y='29' />
            <rect height='1' width='12' x='10' y='2' />
            <rect height='1' width='4' x='9' y='5' />
            <rect height='1' width='4' x='9' y='9' />
            <rect height='1' width='10' x='13' y='12' />
            <rect height='1' width='3' x='9' y='12' />
            <rect height='1' width='10' x='13' y='15' />
            <rect height='1' width='3' x='9' y='15' />
            <rect height='1' width='10' x='13' y='18' />
            <rect height='1' width='3' x='9' y='18' />
            <rect height='1' width='10' x='13' y='21' />
            <rect height='1' width='3' x='9' y='21' />
            <rect height='1' width='10' x='13' y='24' />
            <rect height='1' width='3' x='9' y='24' />
            <rect
              height='1'
              transform='translate(9.5 41.5) rotate(-90)'
              width='20'
              x='15.5'
              y='15.5'
            />
            <path d='M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z' />
            <rect
              height='1'
              transform='translate(-9.5 22.5) rotate(-90)'
              width='20'
              x='-3.5'
              y='15.5'
            />
            <path d='M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z' />
            <path d='M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z' />
            <path d='M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z' />
            <rect height='5' width='1' x='9' y='5' />
            <rect height='5' width='1' x='12' y='5' />
          </svg>
          <div className='mt-[-2px]'>
            <span className='font-semibold'>Your own CV</span>
            <div className='mt-1'>
              <p className='mt-1'>{selectedFile}</p>
              <p className='mt-1'>Uploaded: {selectedDate}</p>
              <div className='mt-2 flex gap-2'>
                <label
                  htmlFor='file-upload'
                  className='flex cursor-pointer items-center gap-2 font-semibold text-blue-500 hover:text-blue-700'
                >
                  <svg
                    width='16px'
                    height='16px'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487'
                      stroke='#1C274C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 16V3M12 3L16 7.375M12 3L8 7.375'
                      stroke='#1C274C'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  Upload new
                  <input
                    id='file-upload'
                    type='file'
                    className='hidden'
                    onChange={handleFileChange}
                  />
                </label>
                <p>
                  (Use .doc, .docx or .pdf files, 3MB and no password protected)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between gap-1 rounded bg-gray-200 px-3 py-1'>
          <svg
            width='18px'
            height='18px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4 12.6111L8.92308 17.5L20 6.5'
              stroke='#000000'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <p>Default</p>
        </div>
      </div>
    </div>
  );
};

export default CVUploader;
