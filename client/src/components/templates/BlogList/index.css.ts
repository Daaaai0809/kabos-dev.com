import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const blogListStyle = {
    div: style({
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        justifyContent: 'center',
    }),
    outerDiv: style({
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: vars.spacing.relative[10],
        width: '100%',
        maxWidth: '680px',
        '@media': {
            'screen and (max-width: 1024px)': {
                width: '50%',
                justifyContent: 'center',
            },
            'screen and (max-width: 768px)': {
                width: '50%',
                justifyContent: 'center',
            },
        },
    }),
    innerDiv: style({
        justifyContent: 'flex-start',
        width: '100%',
        maxWidth: '320px',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                minWidth: '320px',
            },
        },
    }),
}
