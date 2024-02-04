import { Tag } from '../tag/type';

export type Blog = {
    id: number;
    title: string;
    thumbnail: string;
    url: string;
    created_at: string;
    tags: Tag[];
}

export type BlogListResponse = {
    blogs: Blog[];
}

export type BlogResponse = {
    blog: Blog;
}
