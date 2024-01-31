import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const indexStyle = {
    profile: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        padding: vars.spacing.relative[10],
        marginBottom: vars.spacing.relative[16],
    }),
    profileText: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '50%',
        minWidth: '20rem',
        color: vars.color.gray[900],
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
