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
        'main-b': "url('/minimal-background-pattern-wordpress-10.jpg')",
        'bg-1': "url('/bg-1.png')",
        'bg-2': "url('/bg-2.png')",
      },
    },
  },
  plugins: [],
}
export default config
