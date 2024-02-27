const EmployerDifference = () => {
  return (
    <section className='itviec-different-container px-0 px-5 pt-[120px]'>
      <div className='text-center'>
        <h1 className='lg-title'>Điều gì tạo nên sự khác biệt ở ITviec?</h1>
        <p className='normal-text paragraph pt-6'>
          ITviec là trang tuyển dụng và cơ sở dữ liệu hàng đầu về các chuyên gia
          IT tại Việt Nam.
        </p>
      </div>
      <div className='content-wrapper flex items-center justify-center px-5 pb-[120px] pt-[88px]'>
        <div className='content-box border-radius-large relative mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
          <p className='large-number text-it-red font-bold'>10,000+</p>
          <p className='normal-text mt-4'>Công ty và Doanh nghiệp IT</p>
          <img
            alt='first-hand'
            className='absolute'
            src='https://itviec.com/assets/employer_landing/first-hand-8f9978db44dfb1095793ff239fa072e94bfd1d74d7b62a875d7f69eba997b911.svg'
          />
        </div>
        <div className='content-box border-radius-large relative mx-7 mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
          <p className='large-number text-it-red font-bold'>1,500,000+</p>
          <p className='normal-text mt-4'>Hồ sơ đã gửi đến Nhà tuyển dụng</p>
          <img
            alt='first-hand'
            className='absolute'
            src='https://itviec.com/assets/employer_landing/second-hand-ef88cbd609f610ad98826b198a83feb349b8896a396f114c31721640592f6698.svg'
          />
        </div>
        <div className='content-box border-radius-large relative mt-0 mt-4 flex flex-col items-center justify-center bg-white'>
          <p className='large-number text-it-red font-bold'>300,000+</p>
          <p className='normal-text mt-4'>Hồ sơ Ứng viên kinh nghiệm cao</p>
          <img
            alt='first-hand'
            className='absolute'
            src='https://itviec.com/assets/employer_landing/third-hand-4285467762b4dd431d96729f58e05928f8b304f711ce0d683660648ebd294f36.svg'
          />
        </div>
      </div>
    </section>
  );
};

export default EmployerDifference;
