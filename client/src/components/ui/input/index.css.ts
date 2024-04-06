import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const inputStyles = {
    inputDiv: style({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vars.spacing.relative[4],
        width: '100%',
        maxWidth: '640px',
    }),
    input: style({
        width: '100%',
        maxWidth: '640px',
        padding: vars.spacing.relative[3] + ' ' + vars.spacing.relative[4],
        fontSize: vars.font.size.base,
        border: '0.75px solid ' + vars.color.gray[300],
        borderRadius: vars.border.radius[3],
        transition: 'border 0.2s',
        ':focus': {
            border: '1px solid ' + vars.color.green[300],
            outline: 'none',
        },
    }),
    label: style({
        display: 'flex',
        width: '100%',
        maxWidth: '160px',
        justifyContent: 'start',
        alignItems: 'start',
        fontSize: vars.font.size.lg,
        marginBottom: vars.spacing.relative[2],
    }),
    textArea: style({
        display: 'flex',
        width: '100%',
        maxWidth: '640px',
        padding:`${vars.spacing.relative[3]} ${vars.spacing.relative[4]}`,
        fontSize: vars.font.size.base,
        fontFamily: '"Noto Sans JP", apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        border: '0.75px solid ' + vars.color.gray[300],
        borderRadius: vars.border.radius[3],
        transition: 'border 0.2s',
        ':focus': {
            border: '1px solid ' + vars.color.green[300],
            outline: 'none',
        },
        height: '480px',
    }),
}
