import { ProductsPage } from "@/features/products/list";
import { type Product, ProductRepositoryImpl } from "@/repositories/products";
import type { GetStaticProps } from "next";

type ProductsProps = {
  initialProducts: Product[];
};

export default function Products({ initialProducts }: ProductsProps) {
  return (
    <>
      <ProductsPage initialProducts={initialProducts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ProductsProps> = async () => {
  const res = await ProductRepositoryImpl.getProducts();

  return {
    props: {
      initialProducts: res.products || [],
    },
  };
};
