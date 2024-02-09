import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const blogCardStyles = {
    link: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        maxWidth: '20rem',
        maxHeight: '16rem',
        textDecoration: 'none',
        borderRadius: vars.border.radius[4],
        paddingTop: vars.spacing.relative[4],
        paddingBottom: vars.spacing.relative[4],
        boxShadow: `0 0 10px 0 ${vars.color.gray[400]}`,
        transition: 'all 0.2s ease-in-out',
        ":hover": {
            backgroundColor: vars.color.gray[100],
        }
    }),
    thumbnail: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        maxWidth: '18rem',
        maxHeight: '9rem',
        objectFit: 'cover',
        borderRadius: vars.border.radius[3],
    }),
    contextDiv: style({
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        maxWidth: '20rem',
        maxHeight: '7rem',
    }),
    h2: style({
        justifyContent: 'flex-start',
        color: vars.color.gray[900],
        paddingLeft: vars.spacing.relative[3],
    }),
    p: style({
        justifyContent: 'flex-start',
        color: vars.color.gray[700],
        paddingLeft: vars.spacing.relative[5],
        marginTop: vars.spacing.relative[2],
    }),
};
