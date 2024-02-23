import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const mdBlockStyles = {
    div: style({
        width: '100%',
        maxWidth: '784px',
    }),
}

globalStyle('h2', {
    fontSize: vars.font.size['2xl'],
    marginTop: vars.spacing.relative[2],
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

globalStyle('p', {
    color: vars.color.gray[900],
    marginBottom: vars.spacing.relative[2],
});
