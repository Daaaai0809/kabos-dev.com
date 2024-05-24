import { BlogDetailPage } from "@/features/blogs/detail";
import { markdownToHtml } from "@/libs/markdown/markdown";
import { type Blog, BlogRepositoryImpl } from "@/repositories/blogs";
import type { GetStaticProps } from "next";

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

export const getStaticPaths = async () => {
  const res = await BlogRepositoryImpl.getAllBlogs();

  const paths = res.blogs.map((blog) => ({
    params: { id: String(blog.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
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
