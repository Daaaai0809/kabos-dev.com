import { apiRoute, apiRouters } from "@/constants/apiRouters";
import { BlogListResponse, BlogResponse } from "./type";

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
