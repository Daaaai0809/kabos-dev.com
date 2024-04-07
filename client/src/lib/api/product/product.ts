import { apiRoute, apiRouters } from '@/constants/apiRouters';
import { ProductListResponse, ProductResponse, ProductByNameResponse, ProductUpdateRequest, ProductCreateRequest } from './type';

export const fetchProducts = async () => {
    const res = await fetch(`${apiRoute}${apiRouters.products.index}`);
    const data: ProductListResponse = await res.json();
    return data.products;
}

export const fetchProduct = async (id: number) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.detail}${id}`);
    const data: ProductResponse = await res.json();
    return data.product;
}

export const searchProducts = async (keyword: string) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.search}?search_word=${keyword}`);
    const data: ProductByNameResponse = await res.json();
    return data.products;
}

export const postProduct = async (product: ProductCreateRequest) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.admin.create}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
            name: product.name,
            thumbnail: product.thumbnail,
            released_at: product.released_at,
            description: product.description,
            content: product.content,
            url: product.url,
        }),
    });
    const data: ProductResponse = await res.json();
    return data.product;
}

export const putProduct = async (id: number, product: ProductUpdateRequest) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.admin.update}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
            name: product.name,
            thumbnail: product.thumbnail,
            released_at: product.released_at,
            description: product.description,
            content: product.content,
            url: product.url,
        }),
    });
    const data: ProductResponse = await res.json();
    return data.product;
}

export const deleteProduct = async (id: number) => {
    const res = await fetch(`${apiRoute}${apiRouters.products.admin.delete}${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
    });
    return res;
}
