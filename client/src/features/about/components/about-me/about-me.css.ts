import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const aboutMeStyles = {
  outerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    marginBottom: "2rem",
  }),
  h2: style({
    fontSize: vars.font.size["2xl"],
    color: vars.semantic.text.secondary,
    marginBottom: "1rem",
  }),
  innerDiv: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    width: "100%",
    maxWidth: "688px",
    gap: "1rem",
  }),
  ul: style({
    padding: 0,
    margin: 0,
    listStyle: "inside",
    width: "100%",
    maxWidth: "656px",
  }),
  anchor: style({
    color: vars.semantic.text.weak,
    textDecoration: "none",
    transition: "color 0.3s ease",
    ":hover": {
      color: vars.semantic.text.hover,
      textDecoration: "underline",
    },
  }),
  aboutText: style({
    display: "flex",
    justifyContent: "start",
    fontSize: vars.font.size.base,
    color: vars.semantic.text.primary,
    width: "100%",
    maxWidth: "688px",
  }),
};
