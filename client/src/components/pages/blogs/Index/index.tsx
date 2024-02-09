import { BlogList } from '@/components/templates/BlogList';
import { Line } from '@/components/ui/line';
import { blogIndexStyles } from './index.css';
import { useBlogIndex } from './useBlogIndex';

export const BlogIndex = () => {
    const {
        blogs
    } = useBlogIndex();

    return (
        <>
            <div className={blogIndexStyles.mainDiv}>
                <div className={blogIndexStyles.headerDiv}>
                    <h1>Blogs</h1>
                    <Line />
                </div>
                <div className={blogIndexStyles.blogListDiv}>
                    <BlogList blogs={blogs} />
                </div>
            </div>
        </>
    );
}
