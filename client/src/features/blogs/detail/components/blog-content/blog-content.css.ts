import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const blogContentStyles = {
  outerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100dvw",
    maxWidth: "688px",
    minHeight: "80dvh",
    gap: "1rem",
    marginTop: "10rem",
    "@media": {
      "screen and (max-width: 688px)": {
        width: "100%",
      },
    },
  }),
  innerTitleDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "688px",
    padding: "0 2rem",
    gap: "0.5rem",
  }),
  h1: style({
    fontSize: vars.font.size["3xl"],
  }),
  h2: style({
    fontSize: vars.font.size["2xl"],
    color: vars.semantic.text.secondary,
  }),
  innerContentDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    gap: "1rem",
  }),
  tagList: style({
    padding: "0 2rem",
  }),
};
