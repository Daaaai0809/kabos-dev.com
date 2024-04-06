type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'content' | 'datetime-local' | 'date';

export type InputProps = {
    type?: InputTypes;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
    placeholder?: string;
    className?: string;
    label?: string;
};
