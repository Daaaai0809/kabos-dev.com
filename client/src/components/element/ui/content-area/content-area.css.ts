import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const contentAreaStyle = style({
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  width: "100%",
  maxWidth: "688px",
  height: "auto",
  padding: "2rem 1.5rem",
  borderRadius: "1rem",
  backgroundColor: vars.semantic.card.primary,
});
