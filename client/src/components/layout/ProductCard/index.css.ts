import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const productCardAnimation = keyframes({
    '0%': {
        opacity: 0,
        transform: 'translateY(-10px)',
    },
    '100%': {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const productCardStyles = {
    link: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        width: '100%',
        maxWidth: '680px',
        height: '100%',
        maxHeight: '256px',
        borderRadius: vars.border.radius[4],
        boxShadow: `0 0 10px 0 ${vars.color.gray[400]}`,
        transition: 'all 0.3s',
        ':hover': {
            backgroundColor: vars.color.gray[100],
        },
        animationName: productCardAnimation,
        animationDuration: '1s',
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100%',
                width: '100%',
                maxWidth: '20rem',
                maxHeight: '14rem',
                textDecoration: 'none',
                padding: `${vars.spacing.relative[4]} 0 ${vars.spacing.relative[4]} 0`,
                borderRadius: vars.border.radius[4],
            },
        },
    }),
    thumbnail: style({
        width: '50%',
        maxWidth: '340px',
        height: '256px',
        borderRadius: `${vars.border.radius[4]} 0 0 ${vars.border.radius[4]}`,
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                maxWidth: '18rem',
                maxHeight: '9rem',
                objectFit: 'cover',
                borderRadius: vars.border.radius[4],
            },
        },
    }),
    innerDiv: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '340px',
        height: '100%',
        maxHeight: '224px',
        padding: '16px 24px 16px 24px',
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                maxWidth: '20rem',
                maxHeight: '5.5rem',
                padding: 0,
            },
        },
    }),
    contextDiv: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '340px',
        height: '100%',
        borderRadius: `0 ${vars.border.radius[4]} ${vars.border.radius[4]} 0`,
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                maxWidth: '20rem',
            },
        },
    }),
    titleDiv: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        maxHeight: '3rem',
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                maxWidth: '18rem',
                paddingLeft: vars.spacing.relative[4],
                paddingRight: vars.spacing.relative[4],
            },
        },
    }),
    h2: style({
        display: 'flex',
        justifyContent: 'flex-start',
        color: vars.color.gray[900],
        overflow: 'hidden',
        width: '100%',
        maxWidth: '13rem',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        '@media': {
            'screen and (max-width: 768px)': {
                width: '100%',
                maxWidth: '12rem',
            },
        },
    }),
    date: style({
        color: vars.color.gray[500],
        marginTop: vars.spacing.relative[2],
        '@media': {
            'screen and (max-width: 768px)': {
                marginLeft: vars.spacing.relative[2],
            },
        },
    }),
    discriptionDiv: style({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        maxHeight: '6rem',
        '@media': {
            'screen and (max-width: 768px)': {
                display: 'none',
            },
        },
    }),
    p: style({
        display: 'flex',
        justifyContent: 'flex-start',
        color: vars.color.gray[700],
        overflow: 'hidden',
        width: '100%',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        whiteSpace: 'wrap',
    }),
    introductionDiv: style({
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: `${vars.spacing.relative[2]} 0 ${vars.spacing.relative[2]} 0`,
        '@media': {
            'screen and (max-width: 768px)': {
                maxWidth: '18rem',
                padding: `0 ${vars.spacing.relative[4]} 0 ${vars.spacing.relative[4]}`,
            },
        },
    }),
    introductionLink: style({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '9rem',
        height: '1rem',
        padding: vars.spacing.relative[2],
        borderRadius: vars.border.radius[3],
        textDecoration: 'none',
        backgroundColor: vars.color.green[300],
        transition: 'all 0.3s',
        ':hover': {
            backgroundColor: vars.color.green[500],
        },
    }),
    introductionLinkText: style({
        fontSize: vars.font.size.base,
        fontWeight: 'bold',
        color: vars.color.gray[50],
    }),
};
