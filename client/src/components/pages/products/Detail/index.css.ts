import { vars } from '@/styles/theme.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const productDetailAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const productDetailPageStyle = {
    div: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1440px',
        animationName: productDetailAnimation,
        animationDuration: '0.8s',
    }),
}
