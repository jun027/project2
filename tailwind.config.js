/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      zIndex: {
        // Level 1
        header: 100,
        depositBadge: 900,

        // Level 2
        // --- Header ---
        headerMobileBG: 10,
        headerMobileMenu: 20,
      },
      maxWidth: {
        1920: '1920px',
        1440: '1440px',
        650: '650px',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        4: '4px',
      },
      boxShadow: {
        footer: '0 1px 4px 0 rgba(0, 0, 0, 0.25)',
        wrapper: '0 0 3px 1px #49505736',
      },
      fontFamily: {
        'noto-sans-tc': ['Noto Sans TC', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Common
        dark: '#000000',
        white: '#FFFFFF',
        background: '#F8F6EC',
        red: '#FF0000',
        warning: '#BE1D2C',
        story: '#00B092',
        primary: '#504930',
        // Dark
        'dark-900': '#212529',
        'dark-800': '#343A40',
        'dark-700': '#495057',
        'dark-600': '#6C757D',
        'dark-500': '#ADB5BD',
        'dark-400': '#CED4DA',
        'dark-300': '#DEE2E6',
        'dark-200': '#E9ECEF',
        'dark-100': '#F8F9FA',
        // Primary
        'primary-900': '#344E19',
        'primary-800': '#3B5C18',
        'primary-700': '#487417',
        'primary-600': '#5E9818',
        'primary-500': '#76B722',
        'primary-400': '#9AD942',
        'primary-300': '#B6E86E',
        'primary-200': '#D4F2A4',
        'primary-100': '#E9F8CF',
        // Secondary
        'secondary-900': '#263B38',
        'secondary-800': '#294642',
        'secondary-700': '#2F5650',
        'secondary-600': '#3C7269',
        'secondary-500': '#488479',
        'secondary-400': '#629F93',
        'secondary-300': '#8ABEB2',
        'secondary-200': '#B6D9CF',
        'secondary-100': '#DBECE7',
        // Yellow
        'yellow-900': '#7C450B',
        'yellow-800': '#975409',
        'yellow-700': '#BA6D03',
        'yellow-600': '#E09A00',
        'yellow-500': '#FAC302',
        'yellow-400': '#FFE41D',
        'yellow-300': '#FFF247',
        'yellow-200': '#FFFA86',
        'yellow-100': '#FFFDC5',
        // Brown
        'brown-700': '#514931',
        // Sidebar-Card
        'sidebar-card-border': 'rgba(69, 134, 6, 0.15)',
      },
      fontSize: {
        88: '88px',
        72: '72px',
        48: '48px',
        36: '36px',
        32: '32px',
        24: '24px',
        20: '20px',
        16: '16px',
        14: '14px',
        12: '12px',
      },
      lineHeight: {
        1.45: '1.45',
      },
    },
  },
  plugins: [],
}
