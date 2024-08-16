import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const BlogListStyles = {
  outerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    marginTop: "10rem",
  }),
  h2: style({
    fontSize: vars.font.size["2xl"],
    color: vars.semantic.text.secondary,
    fontWeight: "bold",
    marginBottom: "1rem",
  }),
  innerDiv: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    objectFit: "cover",
    width: "100%",
    minHeight: "80dvh",
    gap: "1rem",
  }),
};
