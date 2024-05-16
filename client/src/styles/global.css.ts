import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("body", {
  backgroundColor: vars.semantic.background.primary,
  fontFamily: '"Noto Sans JP", sans-serif',
  margin: 0,
  padding: 0,
  color: vars.semantic.text.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  minHeight: "100dvh",
  height: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "0 1rem",
    },
  },
});

globalStyle("html", {
  scrollPaddingTop: "10dvh",
  scrollBehavior: "smooth",
});

globalStyle("*", {
  margin: 0,
  fontSmooth: "always",
  WebkitFontSmoothing: "antialiased",
});
