import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const productFormStyles = {
    form: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '768px',
    }),
    button: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '160px',
        color: vars.color.gray[50],
        fontSize: vars.font.size.lg,
    }),
    divButtons: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '768px',
        gap: vars.spacing.relative[4],
    }),
    deleteButton: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '160px',
        backgroundColor: 'red',
        color: vars.color.gray[50],
        fontSize: vars.font.size.lg,
        ":hover": {
            backgroundColor: 'darkred',
        },
    }),
};
