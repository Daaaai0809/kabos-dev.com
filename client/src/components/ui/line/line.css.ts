import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const lineStyle = {
    link: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: vars.spacing.relative[3],
        marginBottom: vars.spacing.relative[3],
        width: '100%',
    }),
    hr: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '2.5px solid',
        color: vars.color.green[500],
        width: '70%',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '70%',
                minWidth: '21rem',
            },
        },
    }),
};
