import { IOgp } from './type';

export const fetchOGP = async (url: string): Promise<IOgp> => {
    const res = await fetch(url);
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const ogp = {
        title: doc.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
        description: doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
        image: doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
        url: doc.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
        icon: doc.querySelector('link[rel="icon"]')?.getAttribute('href') || 
            doc.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
            doc.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href') ||
            '',
    };

    // iconの各パターンに対応する
    if (ogp.icon.startsWith('/')) {
        ogp.icon = `${ogp.url}${ogp.icon}`;
    } else if (ogp.icon.startsWith('//')) {
        ogp.icon = `https:${ogp.icon}`;
    } else if (!ogp.icon.startsWith('http')) {
        ogp.icon = `${ogp.url}/${ogp.icon}`;
    }

    return ogp;
};
