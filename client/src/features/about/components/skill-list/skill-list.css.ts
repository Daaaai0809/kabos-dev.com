import { vars } from "@/styles/theme.css";
import { keyframes, style } from "@vanilla-extract/css";

// const arrowKF = keyframes({
//   from: {
//     transform: "translateY(0)",
//   },
//   to: {
//     transform: "translateY(4px)",
//   },
// });

export const skillListStyles = {
  outerDiv: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "688px",
  }),
  h2: style({
    fontSize: vars.font.size["2xl"],
    color: vars.semantic.text.secondary,
    marginBottom: "1rem",
  }),
  innerDiv: style({
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    gap: "1rem",
    height: "100%",
    "@media": {
      "screen and (max-width: 768px)": {
        maxWidth: "336px",
      },
    },
  }),
  innerDivClose: style({
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    gap: "1rem",
    maxHeight: "512px",
    overflow: "hidden",
    "@media": {
      "screen and (max-width: 768px)": {
        maxWidth: "336px",
      },
    },
  }),
  cardButton: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 0.75rem",
    width: "160px",
    height: "160px",
    backgroundColor: vars.color.gray[1],
    borderRadius: "1rem",
    cursor: "pointer",
    border: 0,
    overflow: "hidden",
  }),
  cardHeadDiv: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }),
  img: style({
    width: "32px",
    height: "32px",
  }),
  name: style({
    display: "flex",
    justifyContent: "center",
    fontSize: vars.font.size.lg,
    color: vars.semantic.text.secondary,
    fontWeight: "bold",
    width: "100%",
    maxWidth: "96px",
  }),
  description: style({
    fontSize: vars.font.size.sm,
    color: vars.semantic.text.primary,
    textAlign: "start",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "80px",
    width: "136px",
  }),
  showMoreDiv: style({
    position: "relative",
    display: "flex",
    zIndex: vars.zIndex.forward,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    top: "-160px",
    height: "160px",
    background:
      "linear-gradient(180deg, rgba(229, 241, 240, 50%), rgba(229, 241, 240, 100%) 65%)",
  }),
  showLessDiv: style({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "688px",
    height: "160px",
    backgroundColor: vars.semantic.background.primary,
  }),
  showMoreButton: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    maxWidth: "120px",
    height: "auto",
    border: 0,
    backgroundColor: `${vars.semantic.background.primary} 0%`,
  }),
  showMore: style({
    width: "100%",
    fontSize: vars.font.size.base,
    color: vars.semantic.text.secondary,
  }),
  arrow: style({
    width: "48px",
    height: "32px",
    // animation: `${arrowKF} 1s ease infinite`,
  }),
};
