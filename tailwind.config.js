module.exports = {
  future: {
    purgeLayersByDefault: true,
    // removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    boxShadow: {
      sm: "0 8px 0 24px hsla(213, 28%, 19%, 0.04)",
      default: "0 12px 0 36px hsla(213, 28%, 19%, 0.08)",
      blue: "0 12px 0 36px hsla(213, 80%, 35%, 0.4)",
      "blue-15": "0 12px 0 36px hsla(213, 80%, 35%, 0.15)",
      "blue-05": "0 8px 0 20px hsla(213, 28%, 19%, 0.05)",
      "grey-8": "0px 12px 36px hsl(213deg 28% 19% / 8%)",
      none: "none",
    },
    minWidth: {
      "220": "220px",
      "314": "314px",
      "332": "332px",
    },
    borderRadius: {
      "sm": "3px",
      default: "10px",
      "lg": "25px"
    },
    colors: {
      white: "#fff",
      light: "#eaeeee",
      dark: "#232F3E",
      grey: "#9fa5bd",
      primary: "#1E74DF",
      success: "#76b162",
      info: "#56a1ff",
      warning: "#ecb937",
      error: "#e64545",
      alpha: "hsla(213, 28%, 19%, 0.1)",
      "alpha-05": "hsla(213, 28%, 19%, 0.05)",
      "alpha-15": "hsla(213, 28%, 19%, 0.15)",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      ubuntu: "Ubuntu",
    },
    opacity: {
      "05": "0.05",
      "75": "0.75",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.625rem",
      "4xl": "3rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
    },
    extend: {
      opacity: {
        10: "0.1",
        90: "0.9",
      },
      margin: {
        "-2": "-2px",
      },
      zIndex: {
        "-1": "-1",
      },
      inset: {
        "-8": "-8px",
      }
    },
  },
  variants: {},
  plugins: [],
};
