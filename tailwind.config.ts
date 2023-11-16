import { nextui } from './src/nextui-org/react/theme'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import {commonColors} from './src/nextui-org/react/theme'
import colors from  'tailwindcss/colors'
const docsConfig = require('./src/system/theme-docs/tailwind.config')
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/nextui-org/react/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // prefix: docsConfig.prefix,
 
  theme: {
  },
  darkMode: "class",
  plugins: [require('tailwindcss-radix')(), require('@tailwindcss/typography')],
}
export default config
