import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const meIconStyles = {
  header: style({
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    boxShadow: `0 0 5px 1px ${vars.color.gray[5]}`,
  }),
  index: style({
    width: "10rem",
    height: "10rem",
    borderRadius: "50%",
    boxShadow: `0 0 20px 3px ${vars.color.gray[5]}`,
  }),
};
