import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("body", {
  backgroundColor: vars.semantic.background.primary,
  fontFamily: '"Noto Sans JP", sans-serif',
  margin: "1rem 0.5rem",
  padding: 0,
  color: vars.semantic.text.primary,
  display: "flex",
  justifyContent: "center",

  minHeight: "100dvh",
  height: "100%",
});

globalStyle("html", {
  scrollPaddingTop: "50dvh",
  scrollBehavior: "smooth",
});

globalStyle("*", {
  margin: 0,
});
