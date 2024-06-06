/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the src directory
    './public/index.html', // Include the main HTML file
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // Enable backdropFilter variants
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    backdropFilter: true, // Ensure backdropFilter is enabled
  },
}
