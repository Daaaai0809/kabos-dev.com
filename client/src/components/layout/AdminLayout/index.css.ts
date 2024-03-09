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
    ul: style({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        listStyle: "none",
        padding: 0,
        margin: 0,
    }),
    li: style({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: vars.spacing.relative[3],
    }),
    a: style({
        textDecoration: "none",
        color: vars.color.gray[900],
    }),
};
