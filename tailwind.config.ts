import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'qfc-bg': '#0a1628',
        'qfc-bg-light': '#0d2847',
        'qfc-primary': '#4fc3f7',
        'qfc-accent': '#0288d1',
        'qfc-text': '#e0f7fa',
        'qfc-card': 'rgba(15, 30, 60, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
