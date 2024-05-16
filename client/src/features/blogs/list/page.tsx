import { useEffect } from "react";
import { useGetBlogs } from "./hooks/use-get-blogs";
import { BlogListTemplate } from "./template";
import type { Blog } from "@/repositories/blogs";

type BlogListPageProps = {
  initialBlogs: Blog[];
};

export const BlogListPage = ({ initialBlogs }: BlogListPageProps) => {
  const { data: res, isLoading } = useGetBlogs({ initialBlogs });

  return <BlogListTemplate blogs={res?.blogs ?? []} isLoading={isLoading} />;
};
