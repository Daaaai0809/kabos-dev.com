import { ProductForm } from '@/components/layout/Admin/ProductForm';
import { Product } from '@/types/domain/product';
import { useProductDetail } from './useProductDetail';
import { productDetailPageStyle } from './index.css';
import { Button } from '@/components/ui/button';

export const ProductDetailPage = ({ product }: { product: Product }) => {
    const {
        formParams,
        onChangeFormParams,
        onUpdateProduct,
        onDeleteProduct,
        isPreview,
        setIsPreview,
        reactJSX
    } = useProductDetail(product);

    if (isPreview) return (
        <div className={productDetailPageStyle.mainDiv}>
            <Button onClick={() => setIsPreview(!isPreview)} className={productDetailPageStyle.previewButton}>
                {isPreview ? '編集' : 'プレビュー'}
            </Button>
            <div className={productDetailPageStyle.previewDiv}>
                {reactJSX}
            </div>
        </div>
    );

    return (
        <div className={productDetailPageStyle.mainDiv}>
            <Button onClick={() => setIsPreview(!isPreview)} className={productDetailPageStyle.previewButton}>
                {isPreview ? '編集' : 'プレビュー'}
            </Button>
            <ProductForm 
                name={formParams.name}
                releasedAt={formParams.released_at || ''}
                description={formParams.description}
                content={formParams.content}
                url={formParams.url}
                onChangeName={(e) => onChangeFormParams('name', e)}
                onChangeReleasedAt={(e) => onChangeFormParams('released_at', e)}
                onChangeDescription={(e) => onChangeFormParams('description', e)}
                onChangeContent={(e) => onChangeFormParams('content', e)}
                onChangeUrl={(e) => onChangeFormParams('url', e)}
                onSubmit={() => onUpdateProduct(product.id, formParams)}
                handleDelete={() => onDeleteProduct(product.id)}
                type='update'
            />
        </div>
    )
}
