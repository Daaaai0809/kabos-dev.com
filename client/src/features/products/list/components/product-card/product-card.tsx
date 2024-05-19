import type { Product } from "@/repositories/products";
import Link from "next/link";
import { productCardStyles } from "./product-card.css";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const formattedDate = product.released_at.split("T")[0];

  return (
    <>
      <Link
        key={product.id}
        href={`/products/${product.id}`}
        className={productCardStyles.link}
      >
        <img
          src={product.thumbnail}
          alt={product.name}
          className={productCardStyles.img}
        />
        <div className={productCardStyles.innerDiv}>
          <div className={productCardStyles.innerTitleDiv}>
            <p className={productCardStyles.title}>{product.name}</p>
            <p className={productCardStyles.releasedAt}>{formattedDate}</p>
          </div>
          <p className={productCardStyles.description}>{product.description}</p>
        </div>
      </Link>
    </>
  );
};
