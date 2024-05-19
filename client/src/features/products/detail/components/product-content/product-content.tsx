import { ContentArea } from "@/components/element/ui/content-area";
import type React from "react";
import { MDBlock } from "@/components/element/md-block";
import { productContentStyles } from "./product-content.css";

type ProductContentProps = {
  name: string;
  thumbnail: string;
  description: string;
  parsedContent: React.ReactNode;
};

export const ProductContent = (props: ProductContentProps) => {
  return (
    <div className={productContentStyles.outerDiv}>
      <div className={productContentStyles.innerDiv}>
        <p className={productContentStyles.name}>{props.name}</p>
        <p className={productContentStyles.description}>{props.description}</p>
      </div>
      <div className={productContentStyles.innerContentDiv}>
        <img
          src={props.thumbnail}
          alt={props.name}
          className={productContentStyles.thumbnail}
        />
        <ContentArea>
          <MDBlock parsedContent={props.parsedContent} />
        </ContentArea>
      </div>
    </div>
  );
};
