import { vars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const mdBlockStyles = {
  outerDiv: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    maxWidth: "640px",
    gap: "0.25rem",
    height: "auto",
  }),
};

globalStyle(`${mdBlockStyles.outerDiv} > h1`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size["3xl"],
  color: vars.semantic.text.secondary,
  borderBottom: "0.3px solid rgba(160, 163, 199, 0.5)",
});

globalStyle(`${mdBlockStyles.outerDiv} > h2`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size["2xl"],
  color: vars.semantic.text.primary,
  borderBottom: "0.3px solid rgba(160, 163, 199, 0.5)",
});

globalStyle(`${mdBlockStyles.outerDiv} > h3`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size.xl,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > h4`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size.lg,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > h5`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size.base,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > h6`, {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: "0.125rem",
  fontSize: vars.font.size.sm,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > p`, {
  width: "100%",
  fontSize: vars.font.size.base,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > p > a`, {
  color: vars.semantic.text.weak,
  textDecoration: "none",
  transition: "color 0.3s ease",
});

globalStyle(`${mdBlockStyles.outerDiv} > p > a:hover`, {
  color: vars.semantic.text.hover,
  textDecoration: "underline",
});

globalStyle(`${mdBlockStyles.outerDiv} > p > img`, {
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "0.5rem",
});

globalStyle(`${mdBlockStyles.outerDiv} > ul`, {
  padding: 0,
  margin: 0,
  listStyle: "inside",
  width: "100%",
});

globalStyle(`${mdBlockStyles.outerDiv} > ul > li`, {
  fontSize: vars.font.size.base,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > ol`, {
  padding: 0,
  margin: 0,
  listStyle: "inside",
  width: "100%",
});

globalStyle(`${mdBlockStyles.outerDiv} > ol > li`, {
  fontSize: vars.font.size.base,
  color: vars.semantic.text.primary,
});

globalStyle(`${mdBlockStyles.outerDiv} > figure`, {
  width: "100%",
  height: "auto",
  boxSizing: "border-box",
  fontSize: vars.font.size.base,
});

globalStyle(`${mdBlockStyles.outerDiv} > figure > pre`, {
  width: "100%",
  height: "auto",
  boxSizing: "border-box",
  objectFit: "cover",
  padding: "1rem",
  borderRadius: "0.25rem",
});
