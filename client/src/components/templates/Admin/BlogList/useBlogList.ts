import * as blogApi from '@/lib/api/blog/blog';
import { Blog } from '@/types/domain/blog';
import { useEffect, useState } from 'react';

export const useBlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await blogApi.fetchBlogs();
            setBlogs(res.blogs);
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    return { blogs, isLoading };
};
