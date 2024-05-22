import type { Blog } from "@/repositories/blogs";
// import { useGetBlogByID } from "./hooks/use-get-blog-by-id";
import React from "react";
import { BlogDetailTemplate } from "./template";

type BlogDetailPageProps = {
  id: number;
  blog: Blog;
};

export const BlogDetailPage = (props: BlogDetailPageProps) => {
  return <BlogDetailTemplate blog={props.blog} />;
};
