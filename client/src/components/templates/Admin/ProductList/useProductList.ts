import * as productApi from '@/lib/api/product/product';
import { Product } from '@/types/domain/product';
import { useEffect, useState } from 'react';

export const useProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productApi.fetchProducts();
                setProducts(response);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return {
        products,
        isLoading,
    };
};
