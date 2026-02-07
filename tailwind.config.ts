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
        chalkboard: {
          DEFAULT: "#2C5234",
          dark: "#1a3d28",
          light: "#36453b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
