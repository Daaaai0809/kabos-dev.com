import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const blogListStyles = {
    mainDiv: style({
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        height: '768px',
        width: '100%',
        maxWidth: '552px',
        padding: `${vars.spacing.relative[4]} ${vars.spacing.relative[6]}`,
        backgroundColor: vars.color.gray[300],
        overflowY: 'scroll',
    }),
}
