import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: "#0f0f0f",
      },
    },
  },
  colors: {

  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.5px",
    tight: "-0.25px",
    normal: "0",
    wide: "0.25px",
    wider: "0.5px",
    widest: "1px",
  },
  sizes: {
    container: "100%",
    full: "100%",
    screen: "100vw",
  },
  radii: {
    none: "0",
    sm: "2px",
    base: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "9999px",
  },
});

export default theme;
