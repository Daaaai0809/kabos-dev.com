import { ProductForm } from '@/components/layout/Admin/ProductForm';
import { Button } from '@/components/ui/button';
import { productCreatePageStyles } from './index.css';
import { useProductCreate } from './useProductCreate';

export const ProductCreatePage = () => {
    const {
        formParams,
        onChangeFormParams,
        onCreateProduct,
        isPreview,
        setIsPreview,
        reactJSX
    } = useProductCreate();

    if (isPreview) return (
        <div className={productCreatePageStyles.mainDiv}>
            <Button onClick={() => setIsPreview(!isPreview)} className={productCreatePageStyles.previewButton}>
                {isPreview ? '編集' : 'プレビュー'}
            </Button>
            <div className={productCreatePageStyles.previewDiv}>
                {reactJSX}
            </div>
        </div>
    );

    return (
        <div className={productCreatePageStyles.mainDiv}>
            <Button onClick={() => setIsPreview(!isPreview)} className={productCreatePageStyles.previewButton}>
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
                onSubmit={() => onCreateProduct(formParams)}
            />
        </div>
    )
}
