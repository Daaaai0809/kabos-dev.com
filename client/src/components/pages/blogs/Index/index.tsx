import { BlogList } from '@/components/templates/BlogList';
import { Line } from '@/components/ui/line';
import { blogIndexStyles } from './index.css';
import { useBlogIndex } from './useBlogIndex';
import { Input } from '@/components/ui/input';

export const BlogIndex = () => {
    const {
        blogs,
        keyowrd,
        setKeyword,
        refetchBlogs,
    } = useBlogIndex();

    return (
        <>
            <div className={blogIndexStyles.mainDiv}>
                <div className={blogIndexStyles.headerDiv}>
                    <h1>Blogs</h1>
                    <Line />
                </div>
                <Input type="text" value={keyowrd} onChange={(e) => setKeyword(e.target.value)} placeholder="Blog Title" onSubmit={refetchBlogs} />
                <div className={blogIndexStyles.blogListDiv}>
                    <BlogList blogs={blogs} />
                </div>
            </div>
        </>
    );
}
