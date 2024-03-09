import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const adminIndexStyles = {
    mainDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
    }),
    innerDiv: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1280px',
        '@media': {
            'screen and (max-width: 768px)': {
                flexDirection: 'column',
                alignItems: 'center',
            },
        }
    }),
    div: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '768px',
    }),
}

globalStyle('h2', {
    marginBottom: vars.spacing.relative[2],
});

globalStyle('body', {
    marginBottom: 0,
});
