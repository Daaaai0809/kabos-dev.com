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
