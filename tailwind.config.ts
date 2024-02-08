import type { Config } from 'tailwindcss'
import { brandColors } from './src/styles/brandColors'

const BASE_FONT_SIZE = 16
const rem = (px: number, key = px) => ({ [key]: `${px / BASE_FONT_SIZE}rem` })

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1264px',
      '2xl': '1536px',
    },
    container: {
      padding: {
        DEFAULT: '24px',
      },
    },
    fontFamily: {
      sans: ['var(--euclid-circular-a)'],
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        ...brandColors,
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(to bottom right, #FFF000, #00A550, #00ADEF)',
        'brand-gradient-light':
          'linear-gradient(180deg, #F2F4F7 0%, rgba(242, 244, 247, 0.00) 100%)',
        'brand-gradient-light-90deg':
          'linear-gradient(90deg, #F2F4F7 0%, rgba(242, 244, 247, 0.00) 100%)',
        'brand-gradient-form': 'linear-gradient(180deg, #FFF 0%, #EAECF0 50%)',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        skyblue: '0px 0px 0px 4px #00ADEF4D',
      },
      fontSize: {
        ...rem(10),
        ...rem(11),
        ...rem(12),
        ...rem(14),
        ...rem(16),
        ...rem(18),
        ...rem(20),
        ...rem(24),
        ...rem(28),
        ...rem(32),
        ...rem(40),
        ...rem(48),
      },
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
}

export default config
