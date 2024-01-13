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
    global_bg: "#0f0f0f"
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
  textStyles: {
    '5xl/semibold': {
      fontSize: { base: '3xl', md: '5xl' },
      fontWeight: "semibold",
    },
    '4xl/semibold': {
      fontSize: "4xl",
      fontWeight: "semibold",
    },
    '3xl/bold': {
      fontSize: { base: "xl", sm: "3xl" },
      fontWeight: "bold",
    },
    '2xl/semibold': {
      fontSize: "2xl",
      fontWeight: "semibold",
    },
    'xl/bold': {
      fontSize: "xl",
      fontWeight: "bold",
    },
    'lg/sm': {
      fontSize: { base: 'sm', sm: 'lg' },
    },
    'lg/semibold': {
      fontSize: "lg",
      fontWeight: "semibold",
    },
    'md/semibold': {
      fontSize: "md",
      fontWeight: "semibold",
    },
    'md/medium': {
      fontSize: "md",
      fontWeight: "medium",
    },
    'md': {
      fontSize: "md",
      fontWeight: "normal",
    },
    'sm/bold': {
      fontSize: "sm",
      fontWeight: "bold",
    },
    'sm/semibold': {
      fontSize: "sm",
      fontWeight: "semibold",
    },
    'sm/medium': {
      fontSize: "sm",
      fontWeight: "medium",
    },
    'sm': {
      fontSize: "sm",
      fontWeight: "normal",
    },
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
