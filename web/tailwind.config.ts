import type { Config } from 'tailwindcss';
import {
  fontFamily as defaultFontFamily,
  screens as defaultScreens,
} from 'tailwindcss/defaultTheme';
import tailwindcssAnimated from 'tailwindcss-animated';
import preline from 'preline/plugin';
import vidstack from '@vidstack/react/tailwind.cjs';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    screens: {
      xs: '475px',
      ...defaultScreens,
    },
    container: {
      center: true,
      screens: {
        ...defaultScreens,
        '2xl': '',
      },
    },
    fontFamily: {
      sans: ['var(--font-body)', ...defaultFontFamily.sans],
      display: ['var(--font-display)', ...defaultFontFamily.sans],
    },
  },
  plugins: [tailwindcssAnimated, preline, vidstack],
} satisfies Config;
