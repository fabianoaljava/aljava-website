/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base backgrounds (60%)
        bg: {
          primary: '#091722',
          secondary: '#0F2433',
        },
        // Primary (30%)
        primary: {
          blue: '#1F4E79',
          dark: '#163A5F',
        },
        // Secondary – Teal (10%)
        teal: {
          DEFAULT: '#2A9D8F',
          dark: '#1F7F74',
        },
        // Accent – Amber (10%)
        amber: {
          DEFAULT: '#F4A261',
          dark: '#DD8A3F',
        },
        // Text
        text: {
          white: '#FFFFFF',
          light: '#D9E2EC',
          muted: '#94A3B8',
        },
        // Borders & surfaces
        border: '#1E3A4C',
        surface: '#0F2433',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        primary: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
