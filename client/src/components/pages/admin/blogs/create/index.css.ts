import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const blogCreateStyles = {
    mainDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '768px',
        margin: `${vars.spacing.relative[6]} auto`,
    }),
    formDiv: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '768px',
    }),
    h2: style({
        fontSize: vars.font.size['2xl'],
        marginBottom: vars.spacing.relative[4],
    }),
}

globalStyle('body', {
    marginBottom: 0,
});
