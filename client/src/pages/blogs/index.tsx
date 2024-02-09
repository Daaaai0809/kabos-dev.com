import { BlogCard } from '@/components/layout/BlogCard';

const blog = {
    id: 1,
    title: 'Blog 1',
    thumbnail: 'https://via.placeholder.com/150',
    url: '/blogs/1',
    created_at: '2021-01-01',
    tags: [],
};

export default function Blogs() {
    return (
        <>
            <BlogCard blog={blog} />
        </>
    );
}
