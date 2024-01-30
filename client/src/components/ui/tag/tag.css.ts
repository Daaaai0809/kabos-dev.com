import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tagStyle = {
    link: style({
        marginTop: vars.spacing.relative[2],
        marginBottom: vars.spacing.relative[2],
        minWidth: '1.5rem',
        maxWidth: '6rem',
        minHeight: '1.5rem',
        maxHeight: '2rem',
        background: vars.color.green[600],
        color: vars.color.gray[50],
        paddingTop: vars.spacing.relative[1],
        paddingBottom: vars.spacing.relative[1],
        paddingLeft: vars.spacing.relative[3],
        paddingRight: vars.spacing.relative[3],
        borderRadius: vars.border.radius[5],
        fontSize: vars.font.size.xs,
    }),
};
