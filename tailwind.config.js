export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "desktop-xl": { max: "1440px" },
        "desktop-lg": { max: "1366px" },
        desktop: { max: "1280px" },
        laptop: { max: "1024px" },
      },
      minWidth: {
        48: "192px",
      },
      colors: {
        primary: {
          main: "#C9252F",
        },
        neutral: {
          0: "#F6F6F6",
          25: "#E5E5E5",
          50: "#D9D9D9",
          75: "#666666",
          100: "#444444",
          125: "#212121",
        },
        critical: {
          main: "#891E24",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
