import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#0C68F1",
  colorSecondary: "#0C68F1",

  // UI
  appBg: "white",
  appContentBg: "#F5F5F5",
  appBorderColor: "#E0E0E0",
  appBorderRadius: 0,

  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#111111",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "black",
  barBg: "#212121",

  // Form colors
  inputBg: "white",
  inputBorder: "#E0E0E0",
  inputTextColor: "#111111",
  inputBorderRadius: 3,

  brandTitle: "API.Bible Scripture Styles",
  brandUrl: "https://scripture.api.bible/",
  brandImage: "https://i.ibb.co/CtSV6dp/api-logo-color-bk-2x.png"
});
