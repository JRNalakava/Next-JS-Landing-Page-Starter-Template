// Note: This file is used to configure Tailwind CSS for your project.
/* eslint-env node */
import { nextui } from '@nextui-org/react';

export const content = [
  './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  // Ensure this points to the correct ROOT node_modules directory
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  'node_modules/react-responsive-iframe-viewer/**/*.{js,ts,jsx,tsx,html}',
];
export const theme = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  extend: {
    colors: {
      primary: {
        100: '#1F0015', // purple
      },
      golden: {
        100: '#EFD6AE', // golden
      },
    },
    lineHeight: {
      hero: '4.5rem',
    },
  },
};
export const plugins = [nextui({
  themes:{
    dark:{
      primary: {
        DEFAULT: '#1F0015', // purple
        foreground: "#1F0015",
      },
      golden: {
        100: '#EFD6AE', // golden
      },
    },
    light:{
      primary: {
        DEFAULT: '#1F0015', // purple
        foreground: "#1F0015",
      },
      golden: {
        100: '#EFD6AE', // golden
      },
    }
  },})];
