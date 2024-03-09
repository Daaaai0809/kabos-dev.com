import { Input } from '@/components/ui/input';
import { useCreateBlog } from './useCreateBlog';
import { BlogForm } from '@/components/layout/Admin/BlogForm';

export const BlogCreate = () => {
    const {
        title,
        setTitle,
        url,
        setUrl,
        createBlog,
        isLoading,
    } = useCreateBlog();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const onChangeTitle = (title: string) => {
        setTitle(title);
    };

    const onChangeUrl = (url: string) => {
        setUrl(url);
    };

    return (
        <div>
            <h2>Create Blog</h2>
            <div>
                <BlogForm title={title} url={url} onChangeTitle={onChangeTitle} onChangeUrl={onChangeUrl} onSubmit={createBlog} />
            </div>
        </div>
    );
}
