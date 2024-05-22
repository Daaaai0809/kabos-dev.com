import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const footerStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    height: "144px",
    width: "100%",
  }),
  p: style({
    display: "flex",
    color: vars.semantic.text.primary,
    fontSize: vars.font.size.base,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "3rem",
  }),
};
