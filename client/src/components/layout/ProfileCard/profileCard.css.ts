import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const profileCardStyle = {
    div: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: vars.color.gray[900],
        padding: vars.spacing.relative[8],
        width: '85%',
        '@media': {
            'screen and (max-width: 480px)': {
                width: '110%',
                padding: vars.spacing.relative[4],
            },
        },
    }),
    image: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: vars.spacing.relative[4],
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
        marginRight: vars.spacing.relative[1],
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