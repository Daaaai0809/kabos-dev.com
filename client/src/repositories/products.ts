export type Product = {
  id: number;
  name: string;
  thumbnail: string;
  content: string;
  description: string;
  url: string;
  released_at: string;
};

export type GetProductsResponse = {
  products: Product[];
};

export type GetProductByIdResponse = {
  product: Product;
};

export interface IProductRepository {
  getProducts: () => Promise<GetProductsResponse>;
  getProducts$$key: () => string[];
  getProductById: (id: number) => Promise<GetProductByIdResponse>;
  getProductById$$key: (id: number) => string[];
}

export const ProductRepositoryImpl: IProductRepository = {
  getProducts: async (): Promise<GetProductsResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
    return await response.json();
  },
  getProducts$$key: () => ["getProducts"],
  getProductById: async (id: number): Promise<GetProductByIdResponse> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product/${id}`,
    );
    return await response.json();
  },
  getProductById$$key: (id: number) => ["getProductById", String(id)],
};
