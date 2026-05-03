import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          light: '#E8D5B0',
          dark: '#8B6914'
        },
        deck: {
          black: '#050505',
          dark: '#0A0A0A',
          charcoal: '#141414',
          surface: '#1A1A1A'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      letterSpacing: {
        luxury: '0.25em',
        wide: '0.1em'
      },
      boxShadow: {
        gold: '0 0 24px rgba(201, 169, 110, 0.22)'
      },
      backgroundImage: {
        'deck-radial': 'radial-gradient(circle at top, rgba(201,169,110,0.18), transparent 45%), linear-gradient(180deg, #0a0a0a 0%, #050505 100%)'
      }
    }
  },
  plugins: []
};

export default config;
