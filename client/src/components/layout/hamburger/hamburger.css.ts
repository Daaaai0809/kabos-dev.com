import { vars } from '@/styles/theme.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const hamburgerAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const hamburgerStyle = {
    link: style({
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '55%',
        maxWidth: '811px',
        marginTop: vars.spacing.relative[4],
        zIndex: vars.zIndex.windowFloat,
        '@media': {
            'screen and (max-width: 768px)': {
                width: '55%',
                minWidth: '21.5rem',
            },
        },
    }),
    hamburger: style({
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: vars.zIndex.windowFloat,
        width: '182px',
        height: '400px',
        top: vars.spacing.relative[6],
        borderRadius: vars.border.radius[5],
        background: vars.color.gray[50],
        boxShadow: vars.shadow.window,
    }),
    hamburgerButton: style({
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        zIndex: vars.zIndex.windowFloat,
        animationName: hamburgerAnimation,
        animationDuration: '0.5s',
    }),
    hamburgerOuter: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vars.spacing.relative[3],
        borderRadius: vars.border.radius[5],
        background: vars.color.gray[50],
    }),
    hamburgerInner: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: vars.font.size['2xl'],
        listStyle: 'none',
        marginTop: vars.spacing.relative[4],
    }),
    hamburgerSpan: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: vars.color.gray[50],
        marginTop: vars.spacing.relative[8],
    }),
    hamburgerAnchor: {
        anchor: style({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            padding: vars.spacing.relative[2],
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            borderRadius: vars.border.radius[4],
            marginRight: vars.spacing.relative[2],
            ":hover": {
                opacity: 0.8,
                backgroundColor: vars.color.gray[300],
                textDecoration: 'none',
                color: vars.color.gray[900],
            },
        }),
        list: style({
            textDecoration: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: vars.spacing.relative[1],
            paddingBottom: vars.spacing.relative[1],
            paddingRight: vars.spacing.relative[4],
            paddingLeft: vars.spacing.relative[4],
            borderRadius: vars.border.radius[5],
            color: vars.color.gray[900],
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            ":hover": {
                opacity: 0.8,
                backgroundColor: vars.color.gray[300],
                textDecoration: 'none',
                color: vars.color.gray[900],
            },
        }),
    },
};
