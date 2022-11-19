import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const theme = {
  config: {
    initialColorMode: "dark",
    breakpoints,
  },
  colors: {
    accent: {
      100: "#F50514",
      200: "#EE000E",
      300: "#C30000",
      400: "#AF0000",
      500: "#F50514",
      600: "#F50514",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
};

export default extendTheme(theme);
