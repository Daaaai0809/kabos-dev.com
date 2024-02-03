import { fetchOGP } from '@/lib/ogp/ogp';
import { IOgp } from '@/lib/ogp/type';
import { useEffect, useState } from 'react';

export const useLinkCard = (url: string) => {
    const [ogp, setOgp] = useState<IOgp | null>(null);

    useEffect(() => {
        fetchOGP(url).then((res) => {
            setOgp(res);
        });
    }, [url]);

    return ogp;
};
