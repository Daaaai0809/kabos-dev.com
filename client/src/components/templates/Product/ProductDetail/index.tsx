import { MDBlock } from '@/components/layout/Markdown';
import { ProductDetailProps } from './type';
import { Line } from '@/components/ui/line';
import { productDetailStyle } from './index.css';
import { NO_IMAGE_URL } from '@/constants/images';

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }: ProductDetailProps) => {
    return (
        <>
            <div className={productDetailStyle.divMain}>
                <div className={productDetailStyle.divHeader}>
                    <img src={product.thumbnail||NO_IMAGE_URL} alt={product.name} className={productDetailStyle.thumbnail} />
                    <h1 className={productDetailStyle.h1}>{product.name}</h1>
                </div>
                <Line />
                <div className={productDetailStyle.divContent}>
                    <MDBlock markdown={product.content} />
                </div>
            </div>

            {/* ページ横の目次的な奴↓ */}
        </>
    );
}
