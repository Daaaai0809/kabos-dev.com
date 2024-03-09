import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const loginFormKeyFrames = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(-1rem)',
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const loginFormStyle = {
    div: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '784px',
        margin: '0 auto',
        animationName: loginFormKeyFrames,
        animationDuration: '0.8s',
    }),
    form: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }),
    input: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '18rem'
    }),
    button: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20rem',
        height: '2.5rem',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        color: vars.color.gray[50],
        fontSize: vars.font.size.base,
        backgroundColor: vars.color.green[300],
        marginTop: '1rem',
        ':hover': {
            opacity: 0.8,
            transition: '0.2s',
            backgroundColor: vars.color.green[500],
        },
        ':focus': {
            outline: 'none',
        },
    }),
}
