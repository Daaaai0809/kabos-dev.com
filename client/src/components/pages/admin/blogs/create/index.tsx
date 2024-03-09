import { useCreateBlog } from './useCreateBlog';
import { BlogForm } from '@/components/layout/Admin/BlogForm';
import { blogCreateStyles } from './index.css';

export const BlogCreate = () => {
    const {
        title,
        setTitle,
        url,
        setUrl,
        postedAt,
        setPostedAt,
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

    const onChangePostedAt = (postedAt: string) => {
        setPostedAt(postedAt);
    };

    return (
        <div className={blogCreateStyles.mainDiv}>
            <h2 className={blogCreateStyles.h2}>Create Blog</h2>
            <div className={blogCreateStyles.formDiv}>
                <BlogForm title={title} url={url} postedAt={postedAt} onChangeTitle={onChangeTitle} onChangeUrl={onChangeUrl} onChangePostedAt={onChangePostedAt} onSubmit={createBlog} />
            </div>
        </div>
    );
}
