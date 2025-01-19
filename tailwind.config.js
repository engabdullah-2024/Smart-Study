// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure these paths match your file structure
    './public/index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        delete: {
          '0%': { width: '100%' },
          '50%': { width: '0%' },
          '100%': { width: '0%' },
        },
        typingAndDeleting: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '60%': { width: '100%' },
          '100%': { width: '0%' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end), blink 0.75s step-end infinite',
        delete: 'delete 2s steps(30, end) infinite',
        typingAndDeleting: 'typingAndDeleting 5s steps(30, end) infinite',
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        slideInDown: 'slideInDown 1s ease-out',
      },
    },
  },
  plugins: [],
};
