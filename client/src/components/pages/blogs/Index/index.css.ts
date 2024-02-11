import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const headerAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const blogIndexStyles = {
    mainDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        maxWidth: '1440px',
    }),
    headerDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        maxWidth: '1440px',
        marginTop: vars.spacing.relative[8],
        animationName: headerAnimation,
        animationDuration: '0.8s',
    }),
    blogListDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1280px',
        marginTop: vars.spacing.relative[8],
    }),
}
