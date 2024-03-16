import { apiRoute, apiRouters } from '@/constants/apiRouters';
import { BlogCreateRequest, BlogListResponse, BlogResponse, BlogUpdateRequest } from './type';
import { fetchOGP } from '@/lib/ogp/ogp';

export const fetchBlogs = async () => {
    const res = await fetch(apiRoute + apiRouters.blogs.index, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const searchBlogs = async (keyword: string) => {
    const res = await fetch(apiRoute + apiRouters.blogs.search + `?search_word=${keyword}`);
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const fetchById = async (id: number) => {
    const res = await fetch(apiRoute + apiRouters.blogs.show + `${id}`);
    const blog = await res.json() as BlogResponse;

    return blog;
}

export const createBlog = async (req: BlogCreateRequest) => {
    const ogp = await fetchOGP(req.url);

    const res = await fetch(apiRoute + apiRouters.blogs.admin.create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
            title: req.title,
            url: req.url,
            thumbnail: ogp?.image,
            posted_at: req.posted_at,
        }),
    });

    return res;
}

export const updateBlog = async (id: number, req: BlogUpdateRequest) => {
    const ogp = req.url ? await fetchOGP(req.url) : undefined;

    const res = await fetch(apiRoute + apiRouters.blogs.admin.update + `${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
            title: req.title,
            url: req.url,
            thumbnail: ogp?.image,
            posted_at: req.posted_at,
        }),
    });

    return res;
};

export const deleteBlog = async (id: number) => {
    const res = await fetch(apiRoute + apiRouters.blogs.admin.delete + `${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
        },
    });

    return res;
};
