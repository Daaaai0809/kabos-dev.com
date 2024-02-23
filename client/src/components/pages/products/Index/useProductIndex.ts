import { fetchProducts } from '@/lib/api/product/product';
import { Product } from '@/types/domain/product';
import { useEffect, useState } from 'react';

export const useProductIndex = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetch();
    }, []);

    return { products };
};
