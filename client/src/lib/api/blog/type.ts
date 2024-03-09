import { Blog } from '@/types/domain/blog';

export type BlogListResponse = {
    blogs: Blog[];
}

export type BlogResponse = {
    blog: Blog;
}

export type BlogCreateRequest = {
    title: string;
    url: string;
    posted_at?: string;
    // tag_ids: number[];
};

export type BlogUpdateRequest = {
    title?: string;
    url?: string;
    posted_at?: string;
    // tag_ids: number[];
};
