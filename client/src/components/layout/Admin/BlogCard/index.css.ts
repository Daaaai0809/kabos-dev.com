import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const blogCardStyles = {
    link: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: vars.color.gray[800],
        backgroundColor: vars.color.gray[50],
        width: '100%',
        maxWidth: '496px',
        maxHeight: '256px',
        padding: `${vars.spacing.absolute[2]} ${vars.spacing.absolute[4]}`,
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: vars.color.gray[200],
        },
        borderBottom: `0.2px solid ${vars.color.gray[300]}`,
    }),
    mainDiv: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    }),
    pId: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: vars.spacing.relative[4],
        height: '100%',
        margin: 0,
        padding: 0,
    }),
    div: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: `0 ${vars.spacing.relative[4]}`
    }),
    pTitle: style({
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
    }),
    pUrl: style({
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
    }),
}
