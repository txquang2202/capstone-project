import { useEffect, useState } from 'react';

import useUncontrolled from '@/hooks/useUncontrolled';

export type InputProps = {
  label: string;
  floatingclass?: string;
  formClass?: string;
  required?: boolean;
  error?: string;
  value?: string;
};

export const InputBox = (
  props: InputProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
) => {
  // check if required is true and value is empty after click outside then show error message
  const [error, setError] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  useEffect(() => {
    if (isBlur && props.required && props.value === '') {
      setError(true);
    } else {
      setError(false);
    }
  }, [isBlur, props.value, props.required]);

  const handleBlur = () => {
    setIsBlur(true);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  // };

  return (
    <div className={`form-floating ${props.floatingclass}`}>
      <input
        className={`form-control mb-1 block w-full appearance-none rounded border border-gray-200 bg-red-700 bg-white px-2 py-1 text-base leading-normal text-gray-800 ${props.formClass}`}
        placeholder={props.label}
        {...props}
        // value={value}
        // onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && (
        <div id='contact_request_name-error' className='text-red mt-1 text-sm'>
          *{props.error}
        </div>
      )}
      <label>
        {props.label}
        {props.required && <span className='irequired'>*</span>}
      </label>
    </div>
  );
};

export default InputBox;
