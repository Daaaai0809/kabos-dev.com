import { fetchBlogs } from '@/lib/api/blog/blog';
import { fetchOGP } from '@/lib/ogp/ogp';
import { Blog } from '@/types/domain/blog';
import { useEffect, useState } from 'react';

export const useBlogIndex = () => {
    const [fetchedBlogs, setFetchedBlogs] = useState<Blog[]>([]);
    
    useEffect(() => {
        fetchBlogs().then(async (res) => {
            const blogs = res.blogs.map(async (blog) => {
                // blogのurlからOGPを取得
                let _blog = blog;

                const ogp = await fetchOGP(blog.url);

                _blog.thumbnail = ogp.image;

                return _blog;
            });

            setFetchedBlogs(await Promise.all(blogs));
        });
    }, []);

    return {
        blogs: fetchedBlogs,
    };
};
