import { inputStyles } from "./index.css";
import { InputProps } from "./type";

export const Input = ({
    type = 'text',
    placeholder = '',
    ...props
}: InputProps) => {
    if (type === 'content') {
        return (
            <div className={inputStyles.inputDiv}>
                {props.label && (
                    <label htmlFor="content" className={inputStyles.label}>{props.label}</label>
                )}
                <textarea
                    id="content"
                    className={inputStyles.textArea}
                    value={props.value}
                    onChange={props.onChangeTextarea}
                    placeholder={placeholder}
                />
            </div>
        );
    }

    return (
        <div className={inputStyles.inputDiv}>
            {props.label && (
                <label htmlFor="search" className={inputStyles.label}>{props.label}</label>
            )}
            <input
                id="search"
                className={inputStyles.input + ' ' + props.className}
                type={type}
                value={props.value}
                onChange={props.onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
