import "@/styles/global.css";
import { BlogContent } from "../blog-content";

export default {
  title: "Blog/BlogContent",
  component: BlogContent,
};

export const Default = () => {
  return (
    <BlogContent
      title="title"
      emoji="😀"
      tags={[{ id: 1, name: "tag" }]}
      parsedContent={<div>content</div>}
    />
  );
};
