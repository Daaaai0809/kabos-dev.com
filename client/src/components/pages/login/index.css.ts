import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const h1KeyFrames = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(-1rem)',
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const loginPageStyles = {
    mainDiv: style({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '90vh',
        maxWidth: '784px',
    }),
    innerDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '784px',
    }),
    h1: style({
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: vars.font.size['3xl'],
        animationName: h1KeyFrames,
        animationDuration: '0.8s',
        marginBottom: vars.spacing.relative[2],
    }),
}

globalStyle('body', {
    marginBottom: 0,
});
