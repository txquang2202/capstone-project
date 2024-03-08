import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-lexend)', ...defaultTheme.fontFamily.sans],
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'header-gradient': 'var(--header-gradient)',
      },
      colors: {
        blue: 'var(--blue)',
        indigo: 'var(--indigo)',
        purple: 'var(--purple)',
        pink: 'var(--pink)',
        red: 'var(--red)',
        orange: 'var(--orange)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        teal: 'var(--teal)',
        cyan: 'var(--cyan)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        'gray-dark': 'var(--gray-dark)',
        'gray-100': 'var(--gray-100)',
        'gray-200': 'var(--gray-200)',
        'gray-300': 'var(--gray-300)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'gray-700': 'var(--gray-700)',
        'gray-800': 'var(--gray-800)',
        'gray-900': 'var(--gray-900)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        success: 'var(--success)',
        info: 'var(--info)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        'body-line-height': 'var(--body-line-height)',
        'body-color': 'var(--body-color)',
        black: 'var(--black)',
        'white-red': 'var(--white-red)',
        'light-red': 'var(--light-red)',
        'dark-red': 'var(--dark-red)',
        hyperlink: 'var(--hyperlink)',
        'rich-grey': 'var(--rich-grey)',
        'dark-grey': 'var(--dark-grey)',
        'silver-grey': 'var(--silver-grey)',
        'light-grey': 'var(--light-grey)',
        'success-color': 'var(--success-color)',
        'info-color': 'var(--info-color)',
        'error-color': 'var(--error-color)',
        'warning-color': 'var(--warning-color)',
        'light-success-color': 'var(--light-success-color)',
        'light-info-color': 'var(--light-info-color)',
        'light-error-color': 'var(--light-error-color)',
        'light-warning-color': 'var(--light-warning-color)',
        'disabled-color': 'var(--disabled-color)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
