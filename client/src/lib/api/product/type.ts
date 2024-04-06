import { Product } from '@/types/domain/product';

export type ProductListResponse = {
    products: Product[];
}

export type ProductResponse = {
    product: Product;
}

export type ProductByNameResponse = {
    products: Product[];
}

export type ProductCreateRequest = {
    name: string;
    thumbnail: string;
    released_at?: string;
    description: string;
    content: string;
    url?: string;
}

export type ProductUpdateRequest = {
    name: string;
    thumbnail: string;
    released_at?: string;
    description: string;
    content: string;
    url?: string;
}
