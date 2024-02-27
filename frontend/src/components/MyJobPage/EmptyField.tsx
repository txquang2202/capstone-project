type Props = {
  title: string;
};

const EmptyField = ({ title }: Props) => {
  return (
    <div className=' w-full rounded-xl bg-white py-10'>
      <div className='flex flex-col items-center justify-center gap-4 '>
        <img
          src='https://itviec.com/assets/everything-empty-62c813bcb84be8a092033e40550b6fdc9f6bda05947d60c619b2a74906144f8b.svg'
          alt='itviec-empty'
          className='h-44 w-44'
        />
        <p className='text-lg font-semibold text-gray-400'>
          You have 0 {title}
        </p>
      </div>
    </div>
  );
};

export default EmptyField;
