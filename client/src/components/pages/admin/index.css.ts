import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/theme.css'

export const adminIndexStyles = {
    mainDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
    }),
    innerDiv: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1280px'
    }),
}
