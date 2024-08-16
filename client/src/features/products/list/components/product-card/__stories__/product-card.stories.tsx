import "@/styles/global.css";
import { ProductCard } from "../product-card";

export default {
  title: "Products/ProductCard",
  component: ProductCard,
};

const Product = {
  id: 1,
  name: "Product",
  thumbnail:
    "https://pub-2b2b89079c6f49fa8f33ebec2d59de85.r2.dev/0695770c5f5e70d1c0cd29b40cb23aa6a84c1b70794d330bf910e513d3e267af_640x320.jpg",
  content: "content",
  description: "description",
  url: "url",
  released_at: new Date().toISOString(),
};

export const Default = () => <ProductCard product={Product} />;
