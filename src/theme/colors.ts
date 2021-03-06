import { Colors } from "./types";

export const baseColors = {
  failure: "#cd3e5f",
  // primary: "#41aa29",
  primary: "#000000",
  primaryBright: "#50aa29",
  primaryDark: "#348c22",
  secondary: "#45d9bb",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#35353547",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#35353547",
  inputSecondary: "#d7caec",
  tertiary: "#35353547",
  // text: "#424f3e",
  text: "#ffffff",
  textDisabled: "#BDC2C4",
  // textSubtle: "#62815c",
  textSubtle: "#ffffff",
  borderColor: "#35353547",
  card: "#000000",
  nav: "#f9fdf9",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  nav: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
