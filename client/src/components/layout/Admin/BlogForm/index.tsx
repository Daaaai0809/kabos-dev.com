import { Input } from '@/components/ui/input';

type BlogFormProps = {
    title: string;
    url: string;
    onChangeTitle: (title: string) => void;
    onChangeUrl: (url: string) => void;
    onSubmit: () => void;
};

export const BlogForm = (props: BlogFormProps) => {
    const { title, url, onChangeTitle, onChangeUrl, onSubmit } = props;

    return (
        <>
            <div>
                <Input label="Title" onChange={(e) => onChangeTitle(e.target.value)} value={title} />
                <Input label="URL" onChange={(e) => onChangeUrl(e.target.value)} value={url} />
                <button onClick={onSubmit}>Create</button>
            </div>
        </>
    );
};
