import { useQuery } from "@tanstack/react-query";
import { type Product, ProductRepositoryImpl } from "@/repositories/products";

type UseGetProductsProps = {
  initialProducts: Product[];
};

export const useGetProducts = ({ initialProducts }: UseGetProductsProps) => {
  return useQuery({
    queryKey: ProductRepositoryImpl.getProducts$$key(),
    queryFn: ProductRepositoryImpl.getProducts,
    initialData: { products: initialProducts },
  });
};
