import { ProductDetailPage } from "@/features/products/detail";
import { markdownToHtml } from "@/libs/markdown/markdown";
import { type Product, ProductRepositoryImpl } from "@/repositories/products";
import type { GetServerSideProps } from "next";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return <ProductDetailPage product={product} />;
}

export const getServerSideProps: GetServerSideProps<ProductDetailProps> =
  async (context) => {
    const id = context.params?.id;

    if (!id || Array.isArray(id)) {
      return {
        notFound: true,
      };
    }

    const res = await ProductRepositoryImpl.getProductById(Number(id));

    if (!res.product) {
      return {
        notFound: true,
      };
    }

    if (res.product.content === undefined) {
      return {
        notFound: true,
      };
    }

    const html = await markdownToHtml(res.product.content);

    return {
      props: {
        product: {
          ...res.product,
          content: html,
        },
      },
    };
  };
