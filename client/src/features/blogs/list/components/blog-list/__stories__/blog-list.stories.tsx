import "@/styles/global.css";
import { BlogList } from "../blog-list";
import type { Blog } from "@/repositories/blogs";

export default {
  title: "blogs/component/BlogList",
  component: BlogList,
};

const Blogs: Blog[] = [
  {
    id: 1,
    title: "Title 1",
    url: "URL 1",
    tags: [],
    content: "Content 1",
    posted_at: "2019-01-01",
    created_at: "Created At 1",
  },
  {
    id: 2,
    title: "Title 2",
    url: "",
    tags: [],
    content: "Content 2",
    posted_at: "2019-01-02",
    created_at: "Created At 2",
  },
];

export const Loading = () => <BlogList isLoading={true} blogs={Blogs} />;

export const Default = () => <BlogList isLoading={false} blogs={Blogs} />;
