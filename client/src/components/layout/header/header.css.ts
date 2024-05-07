import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerStyles = {
  outerDiv: style({
    width: "100%",
    height: "auto",
    maxHeight: "48px",
    maxWidth: "688px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  innerDiv: style({
    display: "flex",
    textDecoration: "none",
    gap: vars.spacing[6],
  }),
  link: style({
    textDecoration: "none",
    color: vars.semantic.text.primary,
    ":hover": {
      color: vars.semantic.text.hover,
    },
  }),
};
