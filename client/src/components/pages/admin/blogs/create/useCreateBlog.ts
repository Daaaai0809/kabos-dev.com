import { useState, useEffect } from 'react';
import * as blogApi from '@/lib/api/blog/blog';
import { useRouter } from 'next/router';

export const useCreateBlog = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const createBlog = async () => {
        setIsLoading(true);
        try {
            await blogApi.createBlog({ title, url });
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
        isLoading,
        createBlog,
    };
}
