import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productDetailStyle = {
    divMain: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1280px',
        marginTop: vars.spacing.relative[4],
    }),
    divHeader: style({
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        maxWidth: '784px',
        height: '400px',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '65%',
                minWidth: '20rem',
                height: '288px',
            },
        },
    }),
    thumbnail: style({
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '784px',
        height: '400px',
        maxHeight: '400px',
        filter: 'blur(5px) brightness(1.05)',
        objectFit: 'cover',
        overflow: 'hidden',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                minWidth: '20rem',
                height: '288px'
            },
        },
    }),
    h1: style({
        width: '100%',
        maxWidth: '784px',
        color: vars.color.gray[900],
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        zIndex: vars.zIndex.float,
        position: 'relative',
        top: '-225px',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                top: '-176px',
                minWidth: '19rem',
            },
        },
    }),
    divContent: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        maxWidth: '784px',
        minWidth: '20rem',
    }),
};
