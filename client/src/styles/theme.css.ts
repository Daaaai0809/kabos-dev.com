import { createGlobalTheme } from "@vanilla-extract/css";

import { colorVars, semanticVars } from "./contract.css";

createGlobalTheme(":root", colorVars, {
  gray: {
    1: "#ffffff",
    2: "#fafafa",
    3: "#f5f5f5",
    4: "#f0f0f0",
    5: "#dedede",
    6: "#c2c2c2",
    7: "#979797",
    8: "#818181",
    9: "#606060",
    10: "#3c3c3c",
  },
  green: {
    1: "#e5f1f0",
    2: "#c0ded8",
    3: "#9cc9c0",
    4: "#7db3a8",
    5: "#6da297",
    6: "#5e9386",
    7: "#57867a",
    8: "#50766b",
    9: "#48665d",
    10: "394a44",
  },
  navy: {
    1: "#f0edff",
    2: "#d2d7f4",
    3: "#babddd",
    4: "#a0a3c7",
    5: "#8b8fb6",
    6: "#777ba5",
    7: "#686d94",
    8: "#555a7c",
    9: "#444765",
    10: "#30334d",
  },
  red: {
    1: "hsl(341 100% 99.0%)",
    2: "hsl(341 100% 97.3%)",
    3: "hsl(341 100% 95.1%)",
    4: "hsl(341 100% 93.0%)",
    5: "hsl(341 100% 90.9%)",
    6: "hsl(341 100% 88.7%)",
    7: "hsl(341 100% 85.8%)",
    8: "hsl(341 100% 78.0%)",
    9: "hsl(341 100% 56.1%)",
    10: "hsl(341 100% 52.3%)",
    11: "hsl(341 100% 43.5%)",
    12: "hsl(341 100% 34.0%)",
  },
});

createGlobalTheme(":root", semanticVars, {
  background: {
    primary: colorVars.green[1],
    primaryHover: colorVars.green[2],
    secondary: colorVars.navy[1],
    disabled: colorVars.gray[2],
  },
  text: {
    primary: colorVars.navy[9],
    secondary: colorVars.navy[10],
    hover: colorVars.navy[7],
    weak: colorVars.navy[5],
    weaker: colorVars.gray[7],
    error: colorVars.red[9],
  },
  card: {
    primary: colorVars.gray[1],
    primaryHover: colorVars.gray[3],
  },
  tag: {
    primary: colorVars.navy[2],
    secondary: colorVars.navy[3],
  },
});

const fontVars = createGlobalTheme(":root", {
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "3rem",
  },
});

const spacingVars = createGlobalTheme(":root", {
  none: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  full: "100%",
});

const zIndexVars = createGlobalTheme(":root", {
  normal: "0",
  forward: "1",
  float: "10",
  windowFloat: "100",
  modal: "1000",
  overlay: "10000",
});

const breakPointVars = createGlobalTheme(":root", {
  mobile: "768px",
  tablet: "1024px",
});

export const vars = {
  color: colorVars,
  semantic: semanticVars,
  font: fontVars,
  spacing: spacingVars,
  zIndex: zIndexVars,
  breakPoint: breakPointVars,
};
