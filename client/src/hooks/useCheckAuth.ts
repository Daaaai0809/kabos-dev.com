import * as auth from '@/lib/api/auth/auth';
import { NextRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useCheckAuth = (onSuceess: () => void, router: NextRouter) => {
    const [isLoding, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const res = await auth.checkAuth();
            if (res.status === 200) {
                onSuceess();
            } else {
                router.push('/login');
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    return { isLoding };
};
