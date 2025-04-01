/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'warm-brown': '#C67C4E',  // A warm brown/orange
        'light-peach': '#EDD6C8',  // A light peach/pink
        'dark-gray': '#313131',  // Dark gray (corrected from the original which had invalid characters)
        'medium-gray': '#5E5E53',  // Medium gray/green (corrected from the original which had invalid characters)
        'light-cream': '#F9F2ED',  // Very light creamy white
      },
    },
  },
  plugins: [],
}