import { ProductIndex } from '@/components/templates/Product/ProductList';
import { Line } from '@/components/ui/line';
import { useProductIndex } from './useProductIndex';
import { productIndexPageStyles } from './index.css';

export const ProductIndexPage = () => {
    const { products } = useProductIndex();

    return (
        <div className={productIndexPageStyles.mainDiv}>
            <div className={productIndexPageStyles.headerDiv}>
                <h1>Products</h1>
                <Line />
            </div>
            <div className={productIndexPageStyles.productDiv}>
                <ProductIndex products={products} />
            </div>
        </div>
    );
}
