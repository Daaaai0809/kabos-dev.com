import { Blog } from '@/types/domain/blog';

export type BlogListResponse = {
    blogs: Blog[];
}

export type BlogResponse = {
    blog: Blog;
}
