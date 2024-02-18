/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl':
          'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
      },
      keyframes: {
        slideIn: {
          from: { opacity: 0, transform: 'translateY(3rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideOvers: {
          from: { opacity: 0, transform: 'translateX(4rem)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out forwards',
        slideOvers: 'slideOvers 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
