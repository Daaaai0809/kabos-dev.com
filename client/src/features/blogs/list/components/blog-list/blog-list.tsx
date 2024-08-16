import type { Blog } from "@/repositories/blogs";
import { BlogListStyles } from "./blog-list.css";
import { BlogCard } from "../blog-card/blog-card";

interface BlogListParams {
  isLoading: boolean;
  blogs: Blog[];
}

export const BlogList = ({ isLoading, blogs }: BlogListParams) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={BlogListStyles.outerDiv}>
        <h2 className={BlogListStyles.h2}>Blogs</h2>
        <div className={BlogListStyles.innerDiv}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};
