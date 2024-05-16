import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const headerStyles = {
  outerDiv: style({
    position: "fixed",
    zIndex: 3,
    width: "100%",
    height: "auto",
    maxHeight: "48px",
    maxWidth: "688px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(229, 241, 240, 80%)",
    backdropFilter: "blur(3px)",
    padding: "0.5rem 0 0.5rem 0",
  }),
  imgLink: style({
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  }),
  innerDiv: style({
    display: "flex",
    textDecoration: "none",
    gap: vars.spacing[6],
    "@media": {
      "screen and (max-width: 768px)": {
        gap: vars.spacing[3],
        padding: "0 2rem 0 0",
      },
    },
  }),
  link: style({
    textDecoration: "none",
    color: vars.semantic.text.primary,
    ":hover": {
      color: vars.semantic.text.hover,
    },
  }),
};
