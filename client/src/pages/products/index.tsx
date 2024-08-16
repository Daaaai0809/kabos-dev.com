import { ProductsPage } from "@/features/products/list";
import { type Product, ProductRepositoryImpl } from "@/repositories/products";
import type { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps<ProductsProps> =
  async () => {
    const res = await ProductRepositoryImpl.getProducts();

    return {
      props: {
        initialProducts: res.products || [],
      },
    };
  };
