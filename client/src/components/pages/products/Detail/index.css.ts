import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const productDetailPageStyle = {
    div: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1440px',
    }),
}
