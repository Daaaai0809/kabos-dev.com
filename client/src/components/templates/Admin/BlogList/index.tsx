import { BlogCard } from '@/components/layout/Admin/BlogCard';
import { useBlogList } from './useBlogList';
import { blogListStyles } from './index.css';

export const BlogList = () => {
    const { blogs, isLoading } = useBlogList();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={blogListStyles.mainDiv}>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} id={blog.id} title={blog.title} url={blog.url} />
            ))}
        </div>
    );
};
