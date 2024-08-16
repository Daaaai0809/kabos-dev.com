import "@/styles/global.css";
import { BlogCard } from "../blog-card";
import type { Blog } from "@/repositories/blogs";

export default {
  title: "Blogs/BlogCard",
  component: BlogCard,
};

type BlogExamples = {
  hasURL: {
    zenn: Blog;
    other: Blog;
  };
  noURL: Blog;
};

const blogs: BlogExamples = {
  hasURL: {
    zenn: {
      id: 1,
      title: "title",
      emoji: "",
      tags: [{ id: 1, name: "tag" }],
      content: "",
      url: "https://zenn.dev",
      posted_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    },
    other: {
      id: 2,
      title: "title",
      emoji: "",
      tags: [{ id: 1, name: "tag" }],
      url: "https://example.com",
      content: "",
      posted_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    },
  },
  noURL: {
    id: 3,
    title: "title",
    emoji: "",
    tags: [{ id: 1, name: "tag" }],
    url: "",
    content: "",
    posted_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  },
};

export const Default = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <BlogCard blog={blogs.hasURL.zenn} />
      <BlogCard blog={blogs.hasURL.other} />
      <BlogCard blog={blogs.noURL} />
    </div>
  );
};
