import { ProductDetailPage } from '@/components/pages/admin/products/detail';
import { fetchProduct } from '@/lib/api/product/product';
import { markdownToHtml } from '@/lib/markdown';
import { Product } from '@/types/domain/product';

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <ProductDetailPage product={product} />
    );
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.slug;

    if (!id) {
        return {
            notFound: true
        }
    }

    const res = await fetchProduct(id as number)
        .catch((e) => {
            console.error(e);
            return null;
        });

    if (!res) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: res,
        }
    };
};
