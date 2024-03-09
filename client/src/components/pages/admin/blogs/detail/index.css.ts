import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const adminBlogDetailStyles = {
    mainDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '768px',
        margin: '0 auto',
    }),
};

globalStyle('h2', {
    marginBottom: vars.spacing.relative[4],
});
