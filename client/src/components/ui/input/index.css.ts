import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const inputStyles = {
    input: style({
        width: '100%',
        maxWidth: '646px',
        padding: vars.spacing.relative[3] + ' ' + vars.spacing.relative[4],
        fontSize: vars.font.size.base,
        border: '0.75px solid ' + vars.color.gray[300],
        borderRadius: vars.border.radius[3],
        marginTop: vars.spacing.relative[8],
        transition: 'border 0.2s',
        ':focus': {
            // 外側にblurをかけて太さを変える
            border: '1.5px solid ' + vars.color.green[300],
            outline: 'none',
        },
    }),
}
