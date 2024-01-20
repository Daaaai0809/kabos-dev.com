import { vars } from '@/styles/color.css';
import { style } from '@vanilla-extract/css';

export const buttonStyle = {
    link: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.25rem',
        height: '2.25rem',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        backgroundColor: vars.color.green[300],
        ':hover': {
            opacity: 0.8,
            transition: '0.2s',
            backgroundColor: vars.color.green[500],
        },
        ':focus': {
            outline: 'none',
        },
    }),
};
