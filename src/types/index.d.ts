export declare global {
  /* theme color add PaletteOptions */
}

type CustomColor =
  | "brand"
  | "font"
  | "font2"
  | "caption"
  | "fontGray"
  | "disabled";
type CustomBackgroundColor =
  | "default"
  | "paper"
  | "sub"
  | "caption"
  | "gray"
  | "dark"
  | "deepDark";

// interface AddCustomColor {
//   brand: Palette["primary"];
// }

type CustomPaletteOptions<T = CustomColor> = {
  [k in T]: PaletteOptions["primary"];
};
type CustomPaletteColor<T = CustomColor> = {
  [k in T]: Palette["primary"];
};

type TrueCustomColor<T = CustomColor> = {
  [k in T]: true;
};
type PartialCustomColor = Partial<CustomPaletteOptions<CustomColor>>;

type CustomTypeBackground<T = CustomBackgroundColor> = {
  [k in T]: string;
};

declare module "@mui/material/styles" {
  interface PaletteOptions extends PartialCustomColor {}

  interface Palette extends CustomPaletteColor<CustomColor> {}

  interface TypeBackground extends CustomTypeBackground {}
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides extends TrueCustomColor {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends TrueCustomColor {}
}

declare module "@mui/material/Switch" {
  interface SwitchPropsColorOverrides extends TrueCustomColor {}
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides extends TrueCustomColor {}
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides extends TrueCustomColor {}
}

declare module "@mui/material/Fab" {
  interface FabPropsColorOverrides extends TrueCustomColor {}
}
