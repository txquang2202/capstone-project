import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';

import { useLocale } from '@/locale';

import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const [editorValue, setEditorValue] = useState(value); // Sử dụng giá trị ban đầu từ props

  const { t } = useLocale();

  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );
  const countText = editorValue?.length;
  return (
    <div>
      <div className='border-silver-grey mt-4 h-[290px] overflow-hidden rounded-lg border'>
        <ReactQuill
          value={editorValue} // Sử dụng giá trị từ state local
          onChange={(value) => {
            setEditorValue(value); // Cập nhật giá trị state local
            onChange(value); // Gọi hàm xử lý sự kiện thay đổi từ props
          }}
          className='h-full'
        />
      </div>
      <p className='text-silver-grey mt-1'>
        {countText}/2500 {t('characters')}
      </p>
    </div>
  );
};

export default TextEditor;
