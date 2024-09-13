import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ]
  },
  plugins: [],
};
export default config;
