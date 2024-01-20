import { createGlobalTheme } from '@vanilla-extract/css'
import { colorVars } from './contract.css'

createGlobalTheme(':root', colorVars, {
    green: {
        50: '#E5F1F0',
        100: '#C0DED8',
        200: '#9CC9C0',
        300: '#7DB3A8',
        400: '#6DA297',
        500: '#5E9386',
        600: '#57867A',
        700: '#50766B',
        800: '#48665D',
        900: '#394A44'
    },
    navy: {
        50: '#F0EDFF',
        100: '#D2D7F4',
        200: '#BABDDD',
        300: '#A0A3C7',
        400: '#8B8FB6',
        500: '#777BA5',
        600: '#686D94',
        700: '#555A7C',
        800: '#444765',
        900: '#30334D'
    },
    gray: {
        50: '#FFFFFF',
        100: '#FAFAFA',
        200: '#F5F5F5',
        300: '#F0F0F0',
        400: '#DEDEDE',
        500: '#C2C2C2',
        600: '#979797',
        700: '#818181',
        800: '#606060',
        900: '#3C3C3C'
    }
});

// createGlobalTheme('.dark', colorVars, {
//     green: {
//         50: 'E5F1F0',
//         100: 'C0DED8',
//         200: '9CC9C0',
//         300: '7DB3A8',
//         400: '6DA297',
//         500: '5E9386',
//         600: '57867A',
//         700: '50766B',
//         800: '48665D',
//         900: '394A44'
//     },
//     navy: {
//         50: 'F0EDFF',
//         100: 'D2D7F4',
//         200: 'BABDDD',
//         300: 'A0A3C7',
//         400: '8B8FB6',
//         500: '777BA5',
//         600: '686D94',
//         700: '555A7C',
//         800: '444765',
//         900: '30334D'
//     },
//     gray: {
//         50: 'FFFFFF',
//         100: 'FAFAFA',
//         200: 'F5F5F5',
//         300: 'F0F0F0',
//         400: 'DEDEDE',
//         500: 'C2C2C2',
//         600: '979797',
//         700: '818181',
//         800: '606060',
//         900: '3C3C3C'
//     }
// });

const fontVars = createGlobalTheme(':root', {
    size: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
    }
});

const spacingVars = createGlobalTheme(':root', {
    0: '0',
    full: '100%',
    absolute: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
    },
    relative: {
        1: '0.25em',
        2: '0.5em',
        3: '0.75em',
        4: '1em',
        5: '1.25em',
        6: '1.5em',
        8: '2em',
        10: '2.5em',
        12: '3em',
        16: '4em',
    },
});

export const vars = {
    color: colorVars,
    font: fontVars,
    spacing: spacingVars,
    zIndex: {
        normal: 0,
        forward: 1,
        float: 10,
        windowFloat: 100,
        modal: 1000,
    },
}
