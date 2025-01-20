import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#303033",
        defaultBlack: '#000000',
        gray: "#5C5C66",
        lightGray: "#F5F5FA",
        darkRed: "#C16264",
        green: "#62C1BF",
      },
    },
  },
  darkMode: "media",
  plugins: [],
} satisfies Config;
