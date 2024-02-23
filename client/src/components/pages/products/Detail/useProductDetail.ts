import { fetchProduct } from '@/lib/api/product/product';
import { Product } from '@/types/domain/product';
import { useEffect, useState } from 'react';

export const useProductDetail = (id: number) => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchProduct(id).then((data) => {
            setProduct(data);
        }).catch((err) => {
            if (err.status === 404) {
                setProduct(null);
            } else {
                console.error(err);
            }
        });
    }, [id]);

    return product;
}
