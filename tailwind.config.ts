import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A365D',
        secondary: '#FFD700',
        background: '#F5F5F5',
        text: '#333333',
        accent: '#2C7A7B',
      },
    },
  },
  plugins: [],
}

export default config
