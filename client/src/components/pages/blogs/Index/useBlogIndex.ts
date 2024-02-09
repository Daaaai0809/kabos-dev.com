import { fetchBlogs } from '@/lib/api/blog/blog';
import { Blog } from '@/types/domain/blog';
import { useEffect, useState } from 'react';

export const useBlogIndex = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    console.log(process.env.API_PATH);
    
    useEffect(() => {
        fetchBlogs().then((res) => {
            setBlogs(res.blogs);
        });
    }, []);

    return {
        blogs,
    };
};
