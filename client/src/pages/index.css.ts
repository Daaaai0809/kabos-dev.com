import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const indexStyle = {
    profile: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        width: '80%',
        marginLeft: '10%',
        marginBottom: vars.spacing.relative[16],
    }),
    profileText: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '75%',
        color: vars.color.gray[900],
    }),
};
