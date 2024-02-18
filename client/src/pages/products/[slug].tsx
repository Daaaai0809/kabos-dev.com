import { ProductDetailPage } from '@/components/pages/products/Detail';

const ProductDetail = ({ id }: { id: number }) => {
    return (
        <ProductDetailPage id={id}/>
    );
}

export const getServerSideProps = async (context: any) => {
    const id = context.params.slug;

    if (!id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            id: id as number
        }
    }
}

export default ProductDetail;
