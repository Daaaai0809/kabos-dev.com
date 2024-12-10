import { style } from "@vanilla-extract/css";

export const layoutStyles = {
    main: style({
        display: 'flex',
        height: '100%',
        width: '100%',
    }),
    content: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
    }),
}
