import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productDetailStyle = {
    divMain: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1280px',
    }),
    divHeader: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '784px',
    }),
    thumbnail: style({
        width: '100%',
        maxWidth: '784px',
        height: 'auto',
        objectFit: 'cover',
    }),
    h1: style({
        width: '100%',
        fontWeight: 'bold',
        marginTop: vars.spacing.relative[8],
    }),
    divContent: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '784px',
    }),
};
