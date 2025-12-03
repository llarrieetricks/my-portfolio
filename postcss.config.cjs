// Use explicit requires to ensure PostCSS loads the correct plugin packages
// (some environments and Tailwind versions reference different plugin entry names)
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
