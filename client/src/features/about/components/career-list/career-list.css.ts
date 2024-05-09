import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const careerListStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "688px",
    marginBottom: "2rem",
  }),
  h2: style({
    fontSize: vars.font.size["2xl"],
    color: vars.semantic.text.secondary,
    marginBottom: "1rem",
  }),
  table: style({
    padding: 0,
    margin: 0,
  }),
  tbody: style({
    padding: 0,
    margin: 0,
  }),
  tr: style({
    display: "flex",
    gap: "2rem",
    width: "100%",
    maxWidth: "688px",
    height: "100%",
    "@media": {
      "screen and (max-width: 768px)": {
        gap: "1rem",
      },
    },
  }),
  td: style({
    display: "flex",
    alignItems: "start",
    objectFit: "cover",
    minHeight: "96px",
  }),
  innerDiv: style({
    display: "flex",
    gap: "1rem",
    height: "100%",
  }),
  imgDiv: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  }),
  line: style({
    width: "2px",
    height: "100%",
    minHeight: "64px",
    backgroundColor: vars.color.gray[6],
  }),
  startedAt: style({
    width: "100%",
    maxWidth: "56px",
    fontSize: vars.font.size.sm,
    color: vars.semantic.text.weaker,
    paddingTop: "1.25rem",
  }),
  img: style({
    width: "64px",
    height: "64px",
    minHeight: "64px",
    borderRadius: "50%",
  }),
  tdInfo: style({
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }),
  innerDivInfo: style({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    paddingTop: "1.25rem",
  }),
  name: style({
    fontSize: vars.font.size.lg,
    color: vars.semantic.text.secondary,
  }),
  description: style({
    fontSize: vars.font.size.sm,
    color: vars.semantic.text.primary,
  }),
};
