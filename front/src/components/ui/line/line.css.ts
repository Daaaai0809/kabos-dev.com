import { vars } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';

export const lineStyle = {
    link: style({
        marginTop: vars.spacing.relative[3],
        marginBottom: vars.spacing.relative[3],
        width: '60%',
        color: vars.color.green[500],
        borderTop: '2.5px solid',
    }),
};
