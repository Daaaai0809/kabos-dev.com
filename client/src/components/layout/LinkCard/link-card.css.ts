import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const linkCard = {
    link: style({
        display: 'flex',
        alignItems: 'center',
        height: '9rem',
        width: '100%',
        textDecoration: 'none',
        paddingRight: vars.spacing.relative[4],
        paddingLeft: vars.spacing.relative[4],
        border: '1px solid',
        borderColor: vars.color.gray[300],
        borderRadius: vars.border.radius[6],
        transition: 'all 0.2s ease-in-out',
        ':hover': {
            textDecoration: 'none',
            backgroundColor: vars.color.gray[100],
            borderColor: vars.color.gray[400],
        },
    }),
    image: style({
        width: '30%',
        borderRadius: vars.border.radius[4],
        minWidth: '10rem',
        minHeight: '6rem',
        marginRight: '1rem',
    }),
    div: style({
        display: 'flex',
        flexDirection: 'column',
        height: '80%',
        width: '60%',
        overflow: 'hidden',
    }),
    h3: style({
        color: vars.color.gray[700],
        marginBottom: vars.spacing.relative[1],
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto',
    }),
    p: style({
        marginTop: 0,
        marginBottom: 'auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'preline',
        height: '40%',
    }),
};
