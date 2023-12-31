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
    animation: {
      'spin-slow': 'spin 4s linear infinite',
    }
  },
  plugins: [],
}
export default config
