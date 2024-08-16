import type { Tag } from "./tag";

export type Blog = {
  id: number;
  title: string;
  url: string;
  tags: Tag[];
  emoji?: string;
  content?: string;
  posted_at: string;
  created_at: string;
};

export interface GetAllBlogResponse {
  blogs: Blog[];
}

export interface GetBlogByIDResponse {
  blog: Blog;
}

export interface IBlogRepository {
  getAllBlogs: () => Promise<GetAllBlogResponse>;
  getBlogByID: (id: number) => Promise<GetBlogByIDResponse>;
  getAllBlogs$$Key: () => string[];
  getBlogByID$$Key: (id: number) => string[];
}

export const BlogRepositoryImpl: IBlogRepository = {
  getAllBlogs: async (): Promise<GetAllBlogResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
    return await response.json();
  },
  getBlogByID: async (id: number): Promise<GetBlogByIDResponse> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`,
    );
    return await response.json();
  },
  getAllBlogs$$Key: () => ["getAllblogs"],
  getBlogByID$$Key: (id: number) => ["getBlogByID", String(id)],
};
