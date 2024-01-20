import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const profileCardStyle = {
    link: style({
        position: 'relative',
        color: vars.color.gray[900],
        alignContent: 'center',
        justifyContent: 'center',
        padding: vars.spacing.relative[10],
        width: '100%',
    }),
    image: style({
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        objectFit: 'cover',
    }),
    span: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    anchor: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        padding: vars.spacing.relative[2],
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        borderRadius: vars.border.radius[4],
        ":hover": {
            opacity: 0.8,
            backgroundColor: vars.color.gray[300],
        },
    }),
    h2: style({
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: vars.spacing.relative[1],
    }),
}
