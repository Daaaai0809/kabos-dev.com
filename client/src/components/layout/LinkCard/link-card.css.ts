import { vars } from '@/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const linkCardAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const linkCard = {
    link: style({
        display: 'flex',
        alignItems: 'center',
        height: '8.5rem',
        width: '95%',
        textDecoration: 'none',
        lineHeight: '1.5',
        marginTop: vars.spacing.relative[2],
        marginBottom: vars.spacing.relative[2],
        paddingRight: vars.spacing.relative[4],
        paddingLeft: vars.spacing.relative[4],
        border: '1px solid',
        borderColor: vars.color.gray[300],
        borderRadius: vars.border.radius[6],
        animationName: linkCardAnimation,
        animationDuration: '0.5s',
        transition: 'all 0.2s ease-in-out',
        ':hover': {
            textDecoration: 'none',
            backgroundColor: vars.color.gray[100],
            borderColor: vars.color.gray[400],
        },
        '@media': {
            'screen and (max-width: 1024px)': {
                height: '8rem',
                width: '92%',
            },
            'screen and (max-width: 768px)': {
                height: '7rem',
                width: '90%',
            },
        }
    }),
    outerDiv: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '100%',
    }),
    image: style({
        width: '40%',
        borderRadius: vars.border.radius[4],
        height: '95%',
        marginRight: '1rem',
        maxWidth: '12rem',
        '@media': {
            '(max-width: 1024px) and (min-width: 768px)': {
                width: '45%',
                maxWidth: '10rem',
                minHeight: '5.5rem',
            },
            '(max-width: 768px)': {
                height: '5.5rem',
                width: '25%',
                minWidth: '9rem',
            },
        },
    }),
    div: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        marginTop: vars.spacing.relative[6],
    }),
    h3: style({
        color: vars.color.gray[700],
        marginBottom: vars.spacing.relative[1],
        overflow: 'hidden',
        hyphens: 'auto',
        '@media': {
            'screen and (max-width: 1024px)': {
                fontSize: vars.font.size.lg,
            },
            'screen and (max-width: 768px)': {
                fontSize: vars.font.size.base,
            },
        },
    }),
    p: style({
        marginTop: 0,
        marginBottom: 'auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'preline',
        height: '40%',
        '@media': {
            'screen and (max-width: 1024px)': {
                fontSize: vars.font.size.sm,
                height: '40%',
            },
            'screen and (max-width: 768px)': {
                fontSize: vars.font.size.xs,
                height: '40%',
            },
        },
    }),
};
