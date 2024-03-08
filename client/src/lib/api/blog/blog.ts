import { apiRoute, apiRouters } from "@/constants/apiRouters";
import { BlogCreateRequest, BlogListResponse, BlogResponse } from "./type";

export const fetchBlogs = async () => {
    const res = await fetch(apiRoute + apiRouters.blogs.index);
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const searchBlogs = async (keyword: string) => {
    const res = await fetch(apiRoute + apiRouters.blogs.search + `?search_word=${keyword}`);
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const fetchById = async (id: string) => {
    const res = await fetch(apiRoute + apiRouters.blogs.show + `/${id}`);
    const blog = await res.json() as BlogResponse;

    return blog;
}

export const createBlog = async (req: BlogCreateRequest) => {
    const res = await fetch(apiRoute + apiRouters.blogs.admin.create, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    return res;
}

export const updateBlog = async (id: string, req: BlogCreateRequest) => {
    const res = await fetch(apiRoute + apiRouters.blogs.admin.update + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    return res;
};

export const deleteBlog = async (id: string) => {
    const res = await fetch(apiRoute + apiRouters.blogs.admin.delete + `/${id}`, {
        method: 'DELETE',
    });

    return res;
};
