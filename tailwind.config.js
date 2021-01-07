module.exports = {
  future: {
    purgeLayersByDefault: true,
    // removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    letterSpacing: {
      tight: "-0.02em",
      widest: "0.14em",
    },
    boxShadow: {
      sm: "0 8px 0 24px hsla(213, 28%, 19%, 0.04)",
      default: "0 12px 0 36px hsla(213, 28%, 19%, 0.08)",
      blue: "0 12px 0 36px hsla(213, 80%, 35%, 0.4)",
      "blue-05": "0 8px 0 20px hsla(213, 28%, 19%, 0.05)",
      "blue-10": "0px 12px 36px hsl(213deg 80% 35% / 15%)",
      "blue-15": "0 12px 0 36px hsla(213, 80%, 35%, 0.15)",
      "grey-8": "0px 12px 36px hsl(213deg 28% 19% / 8%)",
      none: "none",
    },
    minWidth: {
      50: "50px",
      60: "60px",
      150: "150px",
      200: "200px",
      300: "300px",
      310: "315px",
      500: "538px",
    },
    maxWidth: {
      60: "60px",
      100: "90px",
      200: "200px",
      250: "280px",
      300: "300px",
      310: "315px",
      350: "350px",
      400: "472px",
      650: "640px",
      700: "692px",
    },
    minHeight: {
      300: "320px",
    },
    maxHeight: {
      350: "360px",
      450: "480px",
    },
    borderRadius: {
      sm: "3px",
      md: "6px",
      lg: "8px",
      default: "10px",
      xl: "20px",
      "2xl": "25px",
    },
    colors: {
      white: "#fff",
      black: "#262A3B",
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
      green: "#64B14A",
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
      0: "0",
      "01": "0.01",
      "03": "0.03",
      "05": "0.05",
      "07": "0.07",
      10: "0.10",
      15: "0.15",
      20: "0.20",
      25: "0.25",
      50: "0.50",
      70: "0.7",
      75: "0.75",
      90: "0.90",
      100: 1,
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
      bolder: "700",
    },
    extend: {
      backgroundImage: (theme) => ({
        "about-card": "url('/img/about-card.svg')",
        "customer-review": "url('/img/customer-review.svg')",
        account: "url('/img/account-background.png')",
        "customer-card":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 2000%)",
      }),
      margin: {
        "-2": "-2px",
        11: "2.7rem",
      },
      zIndex: {
        "-1": "-1",
      },
      inset: {
        "-5": "-5rem",
        "-8": "-8px",
        "-30": "-30px",
        "-55": "-55px",
        "-70": "-70px",
      },
      width: {
        3.5: "0.875rem",
        600: "640px",
        200: "210px",
      },
      height: {
        3.5: "0.875rem",
        60: "60px",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
