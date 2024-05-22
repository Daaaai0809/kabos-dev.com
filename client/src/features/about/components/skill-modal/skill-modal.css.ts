import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const skillModalStyles = {
  content: style({
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  }),
  title: style({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: vars.font.size.xl,
  }),
  img: style({
    width: "32px",
    height: "32px",
  }),
};
