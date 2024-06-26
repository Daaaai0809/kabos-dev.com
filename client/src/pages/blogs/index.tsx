import type { GetServerSideProps } from "next";
import { BlogListPage } from "@/features/blogs/list";
import { type Blog, BlogRepositoryImpl } from "@/repositories/blogs";

type BlogsProps = {
  initialBlogs: Blog[];
};

export default function Blogs({ initialBlogs }: BlogsProps) {
  return (
    <>
      <BlogListPage initialBlogs={initialBlogs} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
  const res = await BlogRepositoryImpl.getAllBlogs();

  return {
    props: {
      initialBlogs: res.blogs || [],
    },
  };
};
