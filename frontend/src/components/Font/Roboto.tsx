import { Roboto } from 'next/font/google';
import css from 'styled-jsx/css';

export const font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const variable = css.global`
  :root {
    --font-roboto: ${font.style.fontFamily};
  }
`;

export const style = () => (
  <style jsx global>
    {variable}
  </style>
);
