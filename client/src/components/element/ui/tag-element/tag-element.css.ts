import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const tagElementStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4.5rem",
    height: "1.5rem",
    borderRadius: "0.75rem",
    padding: "0 0.5rem",
    backgroundColor: vars.semantic.tag.primary,
    color: vars.semantic.text.primary,
  }),
  name: style({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: vars.font.size.xs,
  }),
};
