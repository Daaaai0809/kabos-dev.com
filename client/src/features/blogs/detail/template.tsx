import type { Blog } from "@/repositories/blogs";
import { BlogContent } from "./components/blog-content";
import { parseHtmlToReactJSX } from "@/libs/markdown/markdown";
import { useRouter } from "next/router";

type BlogDetailTemplateProps = {
  blog: Blog;
};

export const BlogDetailTemplate = (props: BlogDetailTemplateProps) => {
  const router = useRouter();

  if (!props.blog.content) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <BlogContent
        title={props.blog.title}
        emoji={props.blog.emoji}
        tags={props.blog.tags}
        parsedContent={parseHtmlToReactJSX(props.blog.content)}
      />
    </>
  );
};
