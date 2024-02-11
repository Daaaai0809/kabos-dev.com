import React from 'react';
import { ButtonProps } from './type';
import { buttonStyle } from './button.css';

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled, className } = props;
    return (
        <button
            className={buttonStyle.link + ' ' + className}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
        {children}
        </button>
    );
};
