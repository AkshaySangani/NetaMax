import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Manrope",
    body: "Hind Madurai",
    select: "Hind Madurai",
  },
  colors: {
    netaGray: {
      "50": "#cecece",
      "100": "#c4c4c4",
      "200": "#bababa",
      "300": "#b0b0b0",
      "400": "#a6a6a6",
      "500": "#9c9c9c",
      "600": "#8c8c8c",
      "700": "#7d7d7d",
      "800": "#6d6d6d",
      "900": "#5e5e5e",
    },
    netaRed: {
      "50": "#faa5a4",
      "100": "#f99292",
      "200": "#f88080",
      "300": "#f76e6d",
      "400": "#f65c5b",
      "500": "#f54a49",
      "600": "#dd4342",
      "700": "#c43b3a",
      "800": "#ac3433",
      "900": "#932c2c",
    },
    netaBlue: {
      "50": "#9cb8ff",
      "100": "#88a9ff",
      "200": "#749bff",
      "300": "#608dff",
      "400": "#4c7eff",
      "500": "#3870ff",
      "600": "#3265e6",
      "700": "#2d5acc",
      "800": "#274eb3",
      "900": "#224399",
    },
    netaGreen: {
      "50": "#f5fbf7",
      "100": "#f2faf5",
      "200": "#f0f9f3",
      "300": "#eef9f1",
      "400": "#ecf8f0",
      "500": "#eaf7ee",
      "600": "#d3ded6",
      "700": "#a4ada7",
      "800": "#8c948f",
      "900": "#757c77",
    },
  },
  components: {
    Modal: {
      baseStyle: {
        dialog: {
          boxShadow: 0,
          alignItems: "center",
          justifyContent: "center",
        },
      },
      variants: {
        popup: {
          dialog: {
            bg: "rgb(0, 0, 0, 0)",
            boxShadow: 0,
            alignItems: "center",
            justifyContent: "center",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        _focus: {
          border: "0px",
          boxShadow: "0px",
        },
      },
    },
  },
});

export default theme;
