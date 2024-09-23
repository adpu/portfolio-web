import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-black': '#707070',
        'black': '#292A2C',
        'soft-gray': '#EFEFEF',
      },
      fontSize: {
        '23p': '23px',
        '25p': '25px',
        '26p': '26px',
        '32p': '32px',
        '64p': '64px',
        '112p': '112px',
      },
      spacing: {
        '32p': '32px',
        '128p': '128px',
      },
      lineHeight: {
        '26p': '26px',
        '30p': '30px',
        '35p': '35px',
      },
      maxWidth: {
         '1440p': '1440px',
      },
      minHeight:{
        '300p': '300px',
      },
      aspectRatio:{
        '43': '4 / 3',
      },
    },
  },
  plugins: [],
};
export default config;
