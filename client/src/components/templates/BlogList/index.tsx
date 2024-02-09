import { BlogCard } from '@/components/layout/BlogCard';
import { BlogListProps } from './type';
import { blogListStyle } from './index.css';

export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
    return (
        <>
            <div className={blogListStyle.div}>
                <div className={blogListStyle.outerDiv}>
                    {blogs.map((blog) => (
                        <div className={blogListStyle.innerDiv} key={blog.id}>
                            <BlogCard key={blog.id} blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
