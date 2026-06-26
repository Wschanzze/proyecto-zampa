/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        limestone: '#E8DCC8',
        'limestone-soft': '#F2EDE0',
        cream: '#F5F5F3',
        umber: '#6B4226',
        'umber-light': '#8B5A38',
        'umber-dark': '#4A2C16',
        wheat: '#C9A84C',
        'wheat-light': '#DFC070',
        'wheat-muted': '#E8D49A',
        teal: '#2E5D5A',
        'teal-light': '#3D7A76',
        'teal-dark': '#1E3D3B',
        charcoal: '#2A2018',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
