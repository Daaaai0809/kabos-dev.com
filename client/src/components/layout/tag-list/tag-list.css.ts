import { style } from "@vanilla-extract/css";

export const tagListStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "688px",
    height: "24px",
    gap: "0.5rem",
  }),
};
