import { style } from "@vanilla-extract/css";

export const ZennLinkStyle = style({
  width: "4rem",
  height: "1rem",
  "@media": {
    "screen and (max-width: 480px)": {
      display: "none",
    },
  },
});
