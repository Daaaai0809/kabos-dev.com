import { ProductCard } from '@/components/layout/ProductCard';
import { ProductIndexProps } from './type';
import { productIndexStyles } from './index.css';

export const ProductIndex = ({ products }: ProductIndexProps) => {
    return (
        <div className={productIndexStyles.mainDiv}>
            <div className={productIndexStyles.innerDiv}>
                {products?.map((product) => (
                    <div className={productIndexStyles.listDiv} key={product.id}>
                        <ProductCard key={product.id} product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};
