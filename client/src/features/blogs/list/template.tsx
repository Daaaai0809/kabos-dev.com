import type { Blog } from "@/repositories/blogs";
import { BlogList } from "./components/blog-list";

type BlogListTemplateProps = {
  blogs: Blog[];
  isLoading: boolean;
};

export const BlogListTemplate = ({
  blogs,
  isLoading,
}: BlogListTemplateProps) => {
  return (
    <>
      <BlogList blogs={blogs} isLoading={isLoading} />
    </>
  );
};
