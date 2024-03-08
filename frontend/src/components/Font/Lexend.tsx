import { Lexend } from 'next/font/google';
import css from 'styled-jsx/css';

export const font = Lexend({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const variable = css.global`
  :root {
    --font-lexend: ${font.style.fontFamily};
  }
`;

export const style = () => (
  <style jsx global>
    {variable}
  </style>
);
