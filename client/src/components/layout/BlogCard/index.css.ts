import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const blogCardStyles = {
    link: style({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        textDecoration: 'none',
        
    }),
};
