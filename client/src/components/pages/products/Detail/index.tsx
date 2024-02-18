import { ProductDetail } from '@/components/templates/Product/ProductDetail';
import { useProductDetail } from './useProductDetail';
import { productDetailPageStyle } from './index.css';

export const ProductDetailPage = ({ id }: { id: number }) => {
    const product = useProductDetail(id);

    if (!product) return null;

    return (
        <div className={productDetailPageStyle.div}>
            <ProductDetail product={product} />
        </div>
    );
}
