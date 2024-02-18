import { apiRoute, apiRouters } from '@/constants/apiRouters';
import { ProductListResponse, ProductResponse, ProductByNameResponse } from './type';

export const fetchProducts = async () => {
    const res = await fetch(`${apiRoute}${apiRouters.products.index}`);
    const data: ProductListResponse = await res.json();
    return data.products;
}

export const fetchProduct = async (id: number) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.detail}/${id}`);
    const data: ProductResponse = await res.json();
    return data.product;
}

export const searchProducts = async (keyword: string) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.search}?search_word=${keyword}`);
    const data: ProductByNameResponse = await res.json();
    return data.products;
}
