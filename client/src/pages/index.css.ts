import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const indexStyle = {
    profile: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        objectFit: 'cover',
        padding: vars.spacing.relative[10],
        marginBottom: vars.spacing.relative[16],
    }),
    profileText: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        width: '65%',
        color: vars.color.gray[900],
    }),
};
