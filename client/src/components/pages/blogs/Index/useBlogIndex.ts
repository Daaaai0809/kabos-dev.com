import { fetchBlogs, searchBlogs } from '@/lib/api/blog/blog';
import { fetchOGP } from '@/lib/ogp/ogp';
import { Blog } from '@/types/domain/blog';
import { useEffect, useState } from 'react';

export const useBlogIndex = () => {
    const [fetchedBlogs, setFetchedBlogs] = useState<Blog[]>([]);
    const [keyowrd, setKeyword] = useState<string>('');

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

    const refetchBlogs = async () => {
        const res = await searchBlogs(keyowrd);
        setFetchedBlogs(res.blogs);
    }

    return {
        blogs: fetchedBlogs,
        
        keyowrd,
        setKeyword,

        refetchBlogs,
    };
};
