import { BlogCard } from '@/components/layout/BlogCard';
import { BlogList } from '@/components/templates/BlogList';

const blogs = [
    {
        id: 1,
        title: 'Blog 1',
        thumbnail: 'https://via.placeholder.com/320x240.png?text=Blog+1',
        url: 'https://example.com',
        created_at: '2021-01-01T00:00:00Z', // '2021-01-01T00:00:00Z' is a string, not a Date object. This is a mistake.
        tags: [],
    },
    {
        id: 2,
        title: 'Blog 2',
        thumbnail: 'https://via.placeholder.com/320x240.png?text=Blog+2',
        url: 'https://example.com',
        created_at: '2021-01-02T00:00:00Z', // '2021-01-02T00:00:00Z' is a string, not a Date object. This is a mistake.
        tags: [],
    },
    {
        id: 3,
        title: 'Blog 3',
        thumbnail: 'https://via.placeholder.com/320x240.png?text=Blog+3',
        url: 'https://example.com',
        created_at: '2021-01-03T00:00:00Z', // '2021-01-03T00:00:00Z' is a string, not a Date object. This is a mistake.
        tags: [],
    },
]

export default function Blogs() {
    return (
        <>
            <BlogList blogs={blogs} />
        </>
    );
}
