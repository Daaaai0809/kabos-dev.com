import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const indexStyle = {
    profile: style({
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        width: '80%'
    }),
    profileText: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        color: vars.color.gray[900],
    }),
};
