import { useBlogDetail } from './useBlogDetail';
import { adminBlogDetailStyles } from './index.css';
import { BlogForm } from '@/components/layout/Admin/BlogForm';

export const BlogDetail = ({ id }: { id: number }) => {
    const {
        title,
        setTitle,
        url,
        setUrl,
        postedAt,
        setPostedAt,
        isLoading,
        handleUpdate,
        handleDelete,
    } = useBlogDetail(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={adminBlogDetailStyles.mainDiv}>
            <h2>Blog Detail</h2>
            <BlogForm title={title} url={url} postedAt={postedAt} onChangeTitle={setTitle} onChangeUrl={setUrl} onChangePostedAt={setPostedAt} type="update" handleDelete={handleDelete} onSubmit={handleUpdate} />
        </div>
    );
}
