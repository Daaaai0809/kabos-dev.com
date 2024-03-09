export type InputProps = {
    type?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
    placeholder?: string;
    className?: string;
    label?: string;
};
