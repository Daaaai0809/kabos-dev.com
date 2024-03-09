import { useState, useEffect } from 'react';
import * as blogApi from '@/lib/api/blog/blog';
import { useRouter } from 'next/router';

export const useBlogDetail = (id: number) => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [postedAt, setPostedAt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            setIsLoading(true);

            try {
                const res = await blogApi.fetchById(id);
                setTitle(res.blog.title);
                setUrl(res.blog.url);
                setPostedAt(res.blog.posted_at);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleUpdate = async () => {
        setIsLoading(true);

        try {
            await blogApi.updateBlog(id, {
                title,
                url,
                posted_at: postedAt,
            });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleDelete = async () => {
        setIsLoading(true);

        try {
            await blogApi.deleteBlog(id);
            router.push('/admin');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        title,
        setTitle,
        url,
        setUrl,
        postedAt,
        setPostedAt,
        isLoading,
        handleUpdate,
        handleDelete,
    };
};
