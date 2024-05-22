import { BlogDetailPage } from "@/features/blogs/detail";
import { markdownToHtml } from "@/libs/markdown/markdown";
import { type Blog, BlogRepositoryImpl } from "@/repositories/blogs";
import type { GetServerSideProps } from "next";

type BlogDetailProps = {
  id: number;
  blog: Blog;
};

export default function BlogDetail({ id, blog }: BlogDetailProps) {
  return (
    <>
      <BlogDetailPage id={id} blog={blog} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogDetailProps> = async (
  context,
) => {
  const id = context.params?.id;

  if (!id || Array.isArray(id)) {
    return {
      notFound: true,
    };
  }

  const res = await BlogRepositoryImpl.getBlogByID(Number(id));

  if (!res.blog) {
    return {
      notFound: true,
    };
  }

  if (res.blog.content === undefined) {
    return {
      notFound: true,
    };
  }

  const html = await markdownToHtml(res.blog.content);

  return {
    props: {
      id: Number(id),
      blog: {
        ...res.blog,
        content: html,
      },
    },
  };
};
