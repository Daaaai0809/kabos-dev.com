import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const aboutMeIndexStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    "@media": {
      "screen and (max-width: 768px)": {
        flexDirection: "column",
      },
    },
    height: "100dvh",
  }),
  innerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  }),
  pDIv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "320px",
  }),
  nameP: style({
    display: "flex",
    fontSize: vars.font.size["2xl"],
    fontWeight: "bold",
    color: vars.semantic.text.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  akaP: style({
    display: "flex",
    fontSize: vars.font.size.lg,
    color: vars.semantic.text.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  iconsDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  }),
  link: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s",
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    ":hover": {
      backgroundColor: vars.semantic.background.primaryHover,
    },
  }),
};
