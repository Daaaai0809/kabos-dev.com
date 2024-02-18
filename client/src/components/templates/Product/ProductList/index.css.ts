import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productIndexStyles = {
    mainDiv: style({
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    innerDiv: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: vars.spacing.relative[10],
        width: '100%',
        maxWidth: '680px',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: vars.spacing.relative[4],
            },
        },
    }),
    listDiv: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '680px',
        height: '256px',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                minWidth: '320px',
            },
        },
    }),
};
