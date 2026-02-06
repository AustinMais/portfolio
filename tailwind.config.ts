import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        accent: {
          DEFAULT: "rgb(52 211 153)",
          muted: "rgb(52 211 153 / 0.15)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
