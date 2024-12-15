import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      "anton": 'anton',
      "jomhuria": 'jomhuria',
      "monaLight": 'monasans-light',
      "monaMedium": 'monasans-medium',
      "monaRegular": 'monasans-regular',
    },
    screens: {
      'mobile': '360px',
      'desktop': '1280px',
    },
    keyframes: {
      appearSlideTop: {
        '0%': { opacity: '0', transform: 'translateX(70px)' },
        '100%': { opacity: '1', transform: 'translateX(0px)' },
      },
      appearSlideRight: {
        '0%': { opacity: '0', transform: 'translateY(50px)' },
        '100%': { opacity: '1', transform: 'translateY(0px)' },
      },
      appearFadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      spinSlow: 'spin 4s linear infinite',
      appearSlideTop: 'appearSlideTop ease-in-out',
      appearSlideRight: 'appearSlideRight ease-in-out',
      appearFadeIn: 'appearFadeIn ease-in-out',
    }
  },
  plugins: [],
}
export default config
