import type { Product } from "@/repositories/products";
import { useGetProducts } from "./hooks/use-get-products";
import { ProductsTemplate } from "./template";

type ProductsPageParams = {
  initialProducts: Product[];
};

export const ProductsPage = ({ initialProducts }: ProductsPageParams) => {
  const { data: res, isLoading } = useGetProducts({ initialProducts });

  return <ProductsTemplate products={res.products} isLoading={isLoading} />;
};
