import { productListStyles } from './index.css';
import { useProductList } from './useProductList';
import { ProductCard } from '@/components/layout/Admin/ProductCard';

export const ProductList = () => {
    const { products, isLoading } = useProductList();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={productListStyles.mainDiv}>
            {products.map((product) => (
                <ProductCard key={product.id} id={product.id} name={product.name} url={product.url} />
            ))}
        </div>
    );
}
