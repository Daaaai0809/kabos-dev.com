import { useQuery } from "@tanstack/react-query";
import { type Blog, BlogRepositoryImpl } from "@/repositories/blogs";

type UseGetBlogByIDProps = {
  id: number;
  initialBlog: Blog;
};

export const useGetBlogByID = ({ id, initialBlog }: UseGetBlogByIDProps) => {
  return useQuery({
    queryKey: BlogRepositoryImpl.getBlogByID$$Key(id),
    queryFn: () => BlogRepositoryImpl.getBlogByID(id),
    initialData: { blog: initialBlog },
  });
};
