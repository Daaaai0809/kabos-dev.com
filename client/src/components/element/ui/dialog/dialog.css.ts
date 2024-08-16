import { vars } from "@/styles/theme.css";
import { style, keyframes } from "@vanilla-extract/css";

const overlayKF = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 0.9,
  },
});

const contentKF = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(0.96)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const dialogStyles = {
  dialogOverlay: style({
    position: "fixed",
    zIndex: vars.zIndex.float,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(72, 102, 93, 50%)",
    animation: `${overlayKF} 0.3s ease forwards`,
  }),
  dialogContent: style({
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: vars.zIndex.modal,
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    animation: `${contentKF} 0.3s ease forwards`,
    width: "80%",
    maxWidth: "480px",
    overflow: "hidden",
    height: "auto",
    maxHeight: "400px",
  }),
  dialogTitle: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    color: vars.semantic.text.secondary,
  }),
  dialogDescription: style({
    fontSize: vars.font.size.base,
    color: vars.semantic.text.primary,
    height: "100%",
    overflowY: "scroll",
  }),
  dialogRightTopClose: style({
    position: "absolute",
    top: vars.spacing[3],
    right: vars.spacing[3],
    cursor: "pointer",
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: vars.color.gray[1],
    border: 0,
  }),
  dialogFooter: style({
    display: "flex",
    justifyContent: "flex-end",
  }),
  dialogClose: style({
    cursor: "pointer",
  }),
};
