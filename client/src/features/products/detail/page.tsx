import type { Product } from "@/repositories/products";
import { ProductDetailTemplate } from "./template";
import { parseHtmlToReactJSX } from "@/libs/markdown/markdown";

type ProductDetailPageProps = {
  product: Product;
};

export const ProductDetailPage = (props: ProductDetailPageProps) => {
  return (
    <ProductDetailTemplate
      name={props.product.name}
      thumbnail={props.product.thumbnail}
      description={props.product.description}
      parsedContent={parseHtmlToReactJSX(props.product.content)}
    />
  );
};
