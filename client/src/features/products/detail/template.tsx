import { ProductContent } from "./components/product-content/product-content";

type ProductDetailTemplateProps = {
  name: string;
  thumbnail: string;
  description: string;
  parsedContent: React.ReactNode;
};

export const ProductDetailTemplate = (props: ProductDetailTemplateProps) => {
  return (
    <>
      <ProductContent {...props} />
    </>
  );
};
