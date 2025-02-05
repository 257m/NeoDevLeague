const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    // From shadCN
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      // Merged colors from both configs
      colors: {
        // Custom colors
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",

        // Original Green Shades
        darkerGreen: "#065f46", // green-800
        lighterGreen: "#34D399", // green-400
        veryLightGreen: "#D1FAE5", // green-100

        accent: "#34D399", // Same as lighterGreen
        dark1: "#044f3b", // Darker than darkerGreen
        dark2: "#065f46", // Same as darkerGreen (deep green)
        dark3: "#0b8065", // Slightly lighter than dark2
        blurred: "rgba(6, 95, 70, 0.5)", // DarkerGreen with 50% opacity
        transparent: "rgba(6, 95, 70, 0.01)", //transparent
        gray: "#E0E0E0", //Gray-300

        textlight: "#83c5af", // Light version for text, lighter than lighterGreen
        light1: "#6ee7b7", // green-300
        light2: "#C4EDE0", // Between veryLightGreen and light1
        light3: "rgba(196, 237, 224, 0.25)", //light2 but opacity change
        light4: "#e8fef9", //The light color of the logos George made
      },

      // Merged font sizes
      fontSize: {
        title: "2rem",
        lg: "1.5rem",
        ml: "1.25rem",
        md: "1rem",
        msd: "0.80rem",
        ms: "0.75rem",
        mms: "0.6rem",
        sm: "0.5rem",
        xs: "0.25rem",
      },

      // Merged border radius values
      borderRadius: {
        lg: `20px`,
        md: `10px`,
        sm: "5px",
      },

      // Merged box shadows
      boxShadow: {
        "button-green": "2px 3px 5px rgba(11, 128, 101, 0.4)",
        "black-shadow": "5px 5px 3px rgba(0, 0, 0, 0.1)",
        "black-shadow2": "10px 10px 10px rgba(0, 0, 0, 0.05)",
      },

      // Merged animations
      animation: {
        rainbow: "rainbow var(--speed, 2s) infinite linear",
      },

      // Merged keyframes
      keyframes: {
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
      },
    },

    // Transition duration from the second config
    transitionDuration: {
      DEFAULT: "300ms",
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
