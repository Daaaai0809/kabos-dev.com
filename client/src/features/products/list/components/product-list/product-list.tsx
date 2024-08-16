import type { Product } from "@/repositories/products";
import { ProductCard } from "../product-card";
import { productListStyles } from "./product-list.css";

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <div className={productListStyles.outerDiv}>
        <h2 className={productListStyles.h2}>Products</h2>
        <div className={productListStyles.innerDiv}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
