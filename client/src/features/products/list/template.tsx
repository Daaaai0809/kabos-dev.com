import { ProductList } from "./components/product-list";
import type { Product } from "@/repositories/products";

type ProductsTemplateParams = {
  products: Product[];
  isLoading: boolean;
};

export const ProductsTemplate = ({
  products,
  isLoading,
}: ProductsTemplateParams) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
