import IconWrapper, { type IconProps } from './core/IconWrapper';

const Icon = (props: IconProps) => (
  <IconWrapper
    width={props.width || props.size || 15}
    height={props.height || props.size || 15}
    fill='none'
    {...props}
  >
    <path
      clipRule='evenodd'
      d='M8.35103 7.22088C8.77945 5.51855 9.97941 4.56322 11.074 4.45661C9.84457 6.98536 12.8712 8.79743 11.1649 11.8192C10.2049 13.5193 8.33941 14.4836 6.25533 14.4997C0.303047 14.5458 -0.829202 8.4487 1.27822 4.29598C0.712659 8.76776 4.77576 8.50349 3.49039 5.62166C2.56746 3.55246 4.57378 0.432578 7.73614 0.50111C5.5579 3.61357 8.78633 4.4127 8.35103 7.22088Z'
      fillRule='evenodd'
      fill='#FFDD85'
    ></path>
  </IconWrapper>
);

export default Icon;
