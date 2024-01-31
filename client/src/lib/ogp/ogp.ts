import { IOgp } from './type';

export const fetchOGP = async (url: string): Promise<IOgp> => {
    const res = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
    const html = await res.text();

    const dom = new DOMParser().parseFromString(html, 'text/html');

    const ogp: IOgp = {
        title: dom.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
        description: dom.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
        image: dom.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
        url: dom.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
        icon: dom.querySelector('link[rel="icon"]')?.getAttribute('href') ||
            dom.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') ||
            dom.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href') ||
            '',
    };

    const origin = new URL(url).origin;

    if (ogp.image.startsWith('/')) {
        ogp.image = origin + ogp.image;
    } else if (!ogp.image.startsWith('http')) {
        ogp.image = origin + '/' + ogp.image;
    }

    if (ogp.icon.startsWith('/')) {
        ogp.icon = origin + ogp.icon;
    } else if (!ogp.icon.startsWith('http')) {
        ogp.icon = origin + '/' + ogp.icon;
    }

    // descriptionが長い場合は省略する
    if (ogp.description.length > 50) {
        ogp.description = ogp.description.slice(0, 50) + '...';
    }

    return ogp;
};
