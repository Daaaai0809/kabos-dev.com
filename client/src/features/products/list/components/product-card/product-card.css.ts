import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const productCardStyles = {
  link: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    minHeight: "96px",
    borderRadius: "1rem",
    color: vars.semantic.text.primary,
    textDecoration: "none",
    backgroundColor: vars.semantic.card.primary,
    transition: "background-color 0.3s",
    ":hover": {
      backgroundColor: vars.semantic.card.primaryHover,
    },
    "@media": {
      "screen and (max-width: 768px)": {
        flexDirection: "column",
      },
    },
  }),
  img: style({
    width: "192px",
    height: "96px",
    borderRadius: "1rem 0 0 1rem",
    objectFit: "cover",
    "@media": {
      "screen and (max-width: 768px)": {
        width: "100%",
        height: "100%",
        maxHeight: "calc(100vw / 2)",
        borderRadius: "1rem 1rem 0 0",
      },
    },
  }),
  innerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "496px",
    padding: "1.5rem 2rem",
    "@media": {
      "screen and (max-width: 768px)": {
        padding: "1rem 1rem",
      },
    },
  }),
  innerTitleDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    width: "100%",
    maxWidth: "432px",
    height: "auto",
  }),
  title: style({
    fontSize: vars.font.size.xl,
    fontWeight: "bold",
    color: vars.semantic.text.secondary,
    width: "100%",
    maxWidth: "332px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
  releasedAt: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: vars.font.size.sm,
    color: vars.semantic.text.weak,
    width: "100%",
    maxWidth: "96px",
  }),
  description: style({
    fontSize: vars.font.size.xs,
    color: vars.semantic.text.primary,
    width: "100%",
    maxWidth: "432px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
};
