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
      200: "200px",
      300: "300px",
      500: "538px",
    },
    maxWidth: {
      400: "472px",
      650: "640px",
    },
    maxHeight: {
      450: "480px",
    },
    borderRadius: {
      sm: "3px",
      md: "6px",
      default: "10px",
      xl: "25px",
    },
    colors: {
      white: "#fff",
      light: "#eaeeee",
      dark: "#232F3E",
      grey: "#9fa5bd",
      primary: "#1E74DF",
      blue: "#385797",
      orange: "#DE4837",
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
      montserrat: "Montserrat",
    },
    opacity: {
      "01": "0.01",
      "03": "0.03",
      "05": "0.05",
      "07": "0.07",
      10: "0.10",
      25: "0.25",
      50: "0.50",
      75: "0.75",
      90: "0.90",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.25rem",
      "2lg": "1.375rem",
      xl: "1.5rem",
      "2xl": "2rem",
      "3xl": "2.625rem",
      "4xl": "3rem",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "600",
    },
    extend: {
      backgroundImage: theme => ({
        "about-card": "url('/img/about-card.svg')",
        "customer-review": "url('/img/customer-review.svg')",
        "account": "url('/img/account-background.png')",
        "customer-card": "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 2000%)",
      }),
      opacity: {
        0: "0",
        7: "0.07",
        10: "0.1",
        50: "0.5",
        70: "0.7",
        90: "0.9",
        100: "1",
      },
      margin: {
        "-2": "-2px",
        "11": "2.7rem",
      },
      zIndex: {
        "-1": "-1",
      },
      inset: {
        "-5": "-5rem",
        "-8": "-8px",
        "-55": "-55px",
      },
      width: {
        "3.5": "0.875rem",
        600: "640px",
        200: "210px",
      },
      height: {
        "3.5": "0.875rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
