/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"], 
  prefix: "", 
  theme: {
    colors: {
      ...require('tailwindcss/colors'), 
      'primary': '#4CAF4F',
      'secondary': '#263238',
      'tertiary': '#2194f3 ',
      'black': '#263238',
      'text-gray': '#18191F',
      'silver': '#F5F7FA',
      'gray': '#717171',
      'gray-blue': '#ABBED1',
      'gray-light': '#89939E',
      'gray-dark': '#4D4D4D',
      'snow': "#ffffff"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Add any other background image extensions from file 1 (optional)
      },
      boxShadow: {
        'card': '0 2px 4px rgba(171,190,209,.2)',
        'image': '0px 8px 16px 0px rgba(171, 190, 209, 0.4)',
        'marketing': '0px 8px 16px 0px #ABBED166',
        // Add any other box shadow extensions from file 1 (optional)
      },
      fontSize: {
        'h1': ['64px', { lineHeight: 1.18, fontWeight: 600 }],
        'h2': ['36px', { lineHeight: 1.22, fontWeight: 600 }],
        'h3': ['28px', { lineHeight: 1.28, fontWeight: 700 }],
        'h4': ['22px', { lineHeight: 1.3, fontWeight: 500 }],
        'h5': ['20px', { lineHeight: 1.3, fontWeight: 500 }],
        'h6': ['15px', { lineHeight: 1.3, fontWeight: 500 }],
        'nav': ['14px', { lineHeight: 1.21 }],
        'info': ['15px', { lineHeight: 1.83 }],
        'ingress': ['28px', { lineHeight: 1.4, fontWeight: 400 }],
        // Add any other font size extensions from file 1 (optional)
      },
      // Add any other extend properties from file 1 (optional)
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Animation plugin from file 2
    // Add any other plugins from file 1 (optional)
  ],
};
