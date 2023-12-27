import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    border: 'none',
    borderRadius: '0.5rem',
    padding: '0.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    backgroundColor: '#7DB3A8',
    ':hover': {
        opacity: 0.8,
        transition: '0.2s',
        backgroundColor: '#598078',
    },
    ':focus': {
        outline: 'none',
    },
});
