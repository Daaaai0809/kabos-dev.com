import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const adminIndexStyle = {
    main: style({
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
    }),
    header: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "3rem",
        maxWidth: "1440px",
        marginTop: vars.spacing.relative[3],
    }),
};
