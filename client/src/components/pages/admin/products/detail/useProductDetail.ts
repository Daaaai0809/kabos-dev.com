import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { deleteProduct, putProduct } from '@/lib/api/product/product';
import { ProductUpdateRequest } from '@/lib/api/product/type';
import { Product } from '@/types/domain/product';
import { markdownToHtml, parseHtmlToReactJSX } from '@/lib/markdown';

export const useProductDetail = (product: Product) => {
    const router = useRouter();
    const [markdown, setMarkdown] = useState<string>('');
    const [reactJSX, setReactJSX] = useState<JSX.Element | null>(null);
    const [isPreview, setIsPreview] = useState<boolean>(false);
    const [formParams, setFormParams] = useState<ProductUpdateRequest>({
        name: product?.name,
        released_at: product?.released_at || '',
        description: product?.description,
        content: product?.content,
        thumbnail: product?.thumbnail,
        url: product?.url,
    });

    useEffect(() => {
        setFormParams({
            name: product?.name,
            released_at: product?.released_at?.split('T')[0] || '',
            description: product?.description,
            content: product?.content,
            thumbnail: product?.thumbnail,
            url: product?.url,
        });
    }, [product]);

    useEffect(() => {
        const rehypeMD = async () => {
            const md = await markdownToHtml(formParams.content);
            setMarkdown(md);
        }

        const parseJSX = async () => {
            const jsx = await parseHtmlToReactJSX(markdown);
            setReactJSX(jsx);
        };

        rehypeMD();
        parseJSX();
    }, [formParams.content, isPreview]);

    const onUpdateProduct = async (id: number, product: ProductUpdateRequest) => {
        putProduct(id, product).then(() => {
            router.push('/admin');
        }).catch((e) => {
            console.error(e);
        });
    }

    const onDeleteProduct = async (id: number) => {
        deleteProduct(id).then(() => {
            router.push('/admin');
        }).catch((e) => {
            console.error(e);
        });
    }

    const onChangeFormParams = (key: string, value: string) => {
        setFormParams({ ...formParams, [key]: value });
    }

    return {
        formParams,
        onChangeFormParams,

        onUpdateProduct,
        onDeleteProduct,

        isPreview,
        setIsPreview,

        reactJSX
    }
}
