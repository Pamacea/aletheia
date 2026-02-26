/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      colors: {
        paper: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e6e1',
          300: '#d9d6d0',
          400: '#c4c0b8',
          500: '#a8a49a',
          600: '#8b877f',
          700: '#6b6762',
          800: '#4a4744',
          900: '#2d2b29',
        },
        ink: {
          DEFAULT: '#2d2b29',
          light: '#4a4744',
          lighter: '#6b6762',
        },
        sepia: {
          50: '#f8f4ef',
          100: '#f0e6d6',
          200: '#e5d4b8',
          300: '#d4bc8f',
          400: '#c09f66',
          500: '#a8864d',
          600: '#8b6f3c',
          700: '#6b552e',
          800: '#4a3a21',
          900: '#2d2214',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
