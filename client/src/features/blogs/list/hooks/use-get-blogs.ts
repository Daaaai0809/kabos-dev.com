import { useQuery } from "@tanstack/react-query";
import { type Blog, BlogRepositoryImpl } from "@/repositories/blogs";

type UseGetBlogsProps = {
  initialBlogs: Blog[];
};

export const useGetBlogs = ({ initialBlogs }: UseGetBlogsProps) => {
  return useQuery({
    queryKey: BlogRepositoryImpl.getAllBlogs$$Key(),
    queryFn: BlogRepositoryImpl.getAllBlogs,
    initialData: { blogs: initialBlogs },
  });
};
