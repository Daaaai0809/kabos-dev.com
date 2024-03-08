import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productListStyles = {
    mainDiv: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '768px',
        width: '100%',
        maxWidth: '528px',
        padding: `${vars.spacing.relative[4]} ${vars.spacing.relative[6]}`,
        backgroundColor: vars.color.gray[300],
    }),
};
