import type { NextApiRequest, NextApiResponse } from 'next';

const proxyUrl = async (req: NextApiRequest, res: NextApiResponse) => {
    const { url } = req.query;
    if (typeof url !== 'string') {
        res.status(400).json({ message: 'url is required' });
        return;
    }

    if (req.method !== 'GET') {
        res.status(400).json({ message: 'GET method only' });
        return;
    }

    const htmlRes = await fetch(url);
    const html = await htmlRes.text();
    res.status(200).send(html);
};

export default proxyUrl;
