import type {
  CSSProperties,
  PropsWithChildren,
  RefAttributes,
  SVGAttributes,
  SVGProps,
} from 'react';

export interface IconProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>,
    RefAttributes<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
  style?: CSSProperties;
  title?: string;
  pathProps?: SVGProps<SVGPathElement>;
}

type Props = PropsWithChildren<
  {
    width: number | string;
    height: number | string;
    path?: string;
  } & IconProps
>;

const Icon = ({
  width,
  height,
  path,
  size,
  className,
  pathProps,
  children,
  ...props
}: Props) => {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${width || size} ${height || size}`}
      className={className}
      width={width || size}
      height={height || size}
      {...props}
    >
      {children ?? <path fill='currentColor' d={path} {...pathProps} />}
    </svg>
  );
};

export default Icon;
