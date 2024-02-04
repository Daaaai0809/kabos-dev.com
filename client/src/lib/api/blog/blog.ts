import { BlogListResponse } from "./type";

export const fetchBlogs = async () => {
    const res = await fetch('/api/blog');
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const searchBlogs = async (keyword: string) => {
    const res = await fetch(`/api/blog/search?search_word=${keyword}`);
    const blogs = await res.json() as BlogListResponse;

    return blogs;
}

export const fetchBlog = async (id: number) => {
    const res = await fetch(`/api/blog/${id}`);
    const blog = await res.json();

    return blog;
}
