import "@/styles/global.css";
import { ProductContent } from "../product-content";
import type { Product } from "@/repositories/products";

export default {
  title: "Features/Product Detail/Product Content",
  component: ProductContent,
};

const product: Product = {
  id: 1,
  url: "https://example.com",
  name: "Product Name",
  thumbnail:
    "https://pub-2b2b89079c6f49fa8f33ebec2d59de85.r2.dev/0695770c5f5e70d1c0cd29b40cb23aa6a84c1b70794d330bf910e513d3e267af_640x320.jpg",
  description: "Product Description",
  content: "Product Content",
  released_at: "2022-01-01",
};

export const Default = () => {
  return (
    <ProductContent
      name={product.name}
      thumbnail={product.thumbnail}
      description={product.description}
      parsedContent={<p>{product.content}</p>}
    />
  );
};
