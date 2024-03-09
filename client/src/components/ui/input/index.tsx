import { inputStyles } from "./index.css";
import { InputProps } from "./type";

export const Input = ({
    type = 'text',
    placeholder = '',
    label = '',
    ...props
}: InputProps) => {
    return (
        <>
            <label htmlFor="search" className=''>{label}</label>
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
