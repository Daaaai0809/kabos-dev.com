import React from 'react';
import { ButtonProps } from './type';

export const Button = (props: ButtonProps) => {
    const { children, onClick, disabled, className } = props;
    return (
        <button
            className={className}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
        {children}
        </button>
    );
};
