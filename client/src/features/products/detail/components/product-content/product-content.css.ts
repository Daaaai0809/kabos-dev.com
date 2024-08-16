import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productContentStyles = {
  outerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
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
  innerDiv: style({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "688px",
  }),
  name: style({
    fontSize: vars.font.size.xl,
    fontWeight: "bold",
  }),
  link: style({
    color: vars.semantic.text.secondary,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  }),
  description: style({
    fontSize: vars.font.size.sm,
    color: vars.semantic.text.primary,
  }),
  innerContentDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    gap: "1rem",
  }),
  thumbnail: style({
    width: "100%",
    maxWidth: "688px",
    height: "calc(100% / 2)",
    borderRadius: "1rem",
    objectFit: "cover",
    border: "0.1px solid rgba(0, 0, 0, 0.05)",
  }),
};
