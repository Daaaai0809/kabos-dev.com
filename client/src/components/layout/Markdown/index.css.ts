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
    width: '100%',
    maxWidth: '780px',
    padding: `${vars.spacing.absolute[1]} 0 ${vars.spacing.absolute[1]} ${vars.spacing.absolute[1]}`,
    borderBottom: `1px solid ${vars.color.gray[400]}`,    
});

globalStyle('h3', {
    padding: `${vars.spacing.absolute[1]} ${vars.spacing.absolute[1]}`,
    fontSize: vars.font.size['xl'],
    marginTop: vars.spacing.relative[1],
    marginBottom: vars.spacing.relative[1],
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
    width: '100%',
    marginBottom: vars.spacing.relative[2],
    padding: `0 0 0 ${vars.spacing.absolute[1]}`,
});
