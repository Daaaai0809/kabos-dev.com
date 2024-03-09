import { useState } from 'react';
import * as blogApi from '@/lib/api/blog/blog';
import { useRouter } from 'next/router';

export const useCreateBlog = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [postedAt, setPostedAt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createBlog = async () => {
        setIsLoading(true);

        const formattedPostedAt = postedAt === '' ? new Date().toISOString().replace('T', ' ').split('.')[0] : new Date(postedAt).toISOString().replace('T', ' ').split('.')[0];
        
        try {
            await blogApi.createBlog({ title, url, posted_at: formattedPostedAt }).then(() => {
                router.push('/admin');
            });
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
        createBlog,
    };
}
