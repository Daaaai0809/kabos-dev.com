import React from 'react';
import { ButtonProps } from './type';
import { buttonStyle } from './button.css';

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled } = props;
    return (
        <button
            className={buttonStyle.link}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
        {children}
        </button>
    );
};
