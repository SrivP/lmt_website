/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      
        },
      colors: {
        black: {
          50: `#11111B`,
        }
      }
    },
    backgroundImage: {
      'hero': "url('/public/images/pawel-czerwinski-5oVwEOmNt9Y-unsplash.jpg')",
    },
  },
  plugins: [],
}
