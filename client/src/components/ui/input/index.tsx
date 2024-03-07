import Image from "next/image";
import { inputStyles } from "./index.css";
import { InputProps } from "./type";

export const Input = ({
    type = 'text',
    placeholder = '',
    ...props
}: InputProps) => {
    return (
        <>
            <input
                id="search"
                className={inputStyles.input + ' ' + props.className}
                type={type}
                value={props.value}
                onChange={props.onChange}
                placeholder={placeholder}
            />
        </>
    );
}
