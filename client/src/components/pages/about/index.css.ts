import { vars } from '@/styles/theme.css';
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const profileAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
  });

export const indexStyle = {
    profile: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        width: '100%',
        maxWidth: '1440px',
        padding: vars.spacing.relative[10],
        animationName: profileAnimation,
        animationDuration: '0.8s',
    }),
    profileText: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '780px',
        minWidth: '20rem',
        color: vars.color.gray[900],
        lineHeight: '2',
    }),
};

globalStyle('h2', {
    fontSize: vars.font.size['2xl'],
    marginBottom: vars.spacing.relative[2],
});

globalStyle('a', {
    color: vars.color.gray[700],
    transition: 'color 0.2s ease',
});

globalStyle('a:hover', {
    textDecoration: 'underline',
    color: vars.color.gray[800],
});
