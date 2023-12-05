// import { nextui } from './src/nextui-org/react/theme'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
 
import colors from  'tailwindcss/colors'
import { yooui } from './src/nextui-org/react/core/theme'
 
const docsConfig = require('./src/system/theme-docs/tailwind.config')
const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/nextui-org/react/**/*.{js,ts,jsx,tsx,mdx}',
  ],  
  // prefix: docsConfig.prefix,
  theme: {
    // fontSize: {
    //   tiny: [`var(--nextui-font-size-tiny)`, `var(--nextui-line-height-tiny)`],
    //   small: [`var(--nextui-font-size-small)`, `var(--nextui-line-height-small)`],
    //   medium: [`var(--nextui-font-size-medium)`, `var(--nextui-line-height-medium)`],
    //   large: [`var(--nextui-font-size-large)`, `var(--nextui-line-height-large)`],
    // },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'white': '#ffffff',
    //   'blue': {
    //     50: "#e6f1fe",
    //     100: "#cce3fd",
    //     200: "#99c7fb",
    //     300: "#66aaf9",
    //     400: "#338ef7",
    //     500: "#165DFF",
    //     600: "#005bc4",
    //     700: "#004493",
    //     800: "#002e62",
    //     900: "#001731",
    //   },
    // }
  },
  darkMode: "class",
  plugins: [ yooui(),require('tailwindcss-radix')(), require('@tailwindcss/typography')],
}
export default config
