import { lighten, darken, createTheme } from "@mui/material";

const generateColorPalette = (main: string) => ({
  main,
  light: lighten(main, 0.3),
  dark: darken(main, 0.2),
  contrastText: "#FFFFFF",
});

const BASE_FS = 16;

export const theme = createTheme({
  palette: {
    primary: generateColorPalette("#8884FE"),
    secondary: generateColorPalette("#DF84FE"),
    success: generateColorPalette("#8FFE84"),
    info: generateColorPalette("#84DFFE"),
    warning: generateColorPalette("#FEE184"),
    error: generateColorPalette("#FE8484"),
    font: generateColorPalette("#212121"),
    font2: generateColorPalette("#363636"),
    caption: generateColorPalette("#939393"),
    fontGray: generateColorPalette("#4D4D4D"),
    disabled: generateColorPalette("#D4D4D4"),
    brand: generateColorPalette("#F89A1C"),
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      sub: "#F5F5F5",
      caption: "#E9E9E9",
      gray: "#D2D2D2",
      dark: "#919191",
      deepDark: "#333333",
    },
  },
  typography: {
    fontFamily: '"Noto Sans KR", serif',
    // @ts-ignore
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    // fontFamily: "Roboto",
    h1: { fontSize: `${40 / BASE_FS}rem` },
    h2: { fontSize: `${32 / BASE_FS}rem` },
    h3: { fontSize: `${28 / BASE_FS}rem` },
    h4: { fontSize: `${24 / BASE_FS}rem` },
    h5: { fontSize: `${20 / BASE_FS}rem` },
    h6: { fontSize: `${18 / BASE_FS}rem` },
    body1: { fontSize: `${16 / BASE_FS}rem` },
    body2: { fontSize: `${14 / BASE_FS}rem` },
    subtitle1: { fontSize: `${12 / BASE_FS}rem` },
    subtitle2: { fontSize: `${10 / BASE_FS}rem` },
    caption: { fontSize: `${12 / BASE_FS}rem` },
    fontWeightRegular: 400,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
  },
});
