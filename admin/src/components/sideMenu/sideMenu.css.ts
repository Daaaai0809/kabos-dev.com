import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const sideMenuStyles = {
    main: style({
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        maxWidth: '200px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '30px',
        paddingBottom: '30px',
        backgroundColor: vars.color.navy[10],
    }),
    title: style({
        display: 'flex',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'normal',
        marginBottom: '20px',
        color: vars.color.gray[1],
    }),
    menuListDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    }),
    menuList: style({
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
    }),
    menuItem: style({
        display: 'flex',
        width: 'auto',
        height: '50px',
        ":hover": {
            backgroundColor: vars.color.navy[8],
        },
        transition: 'background-color 0.3s',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 0 0 10px',
        borderRadius: '5px',
    }),
    menuLink: style({
        color: vars.color.gray[1],
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }),
}
