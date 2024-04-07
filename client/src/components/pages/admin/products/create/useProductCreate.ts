import { postProduct } from '@/lib/api/product/product';
import { ProductCreateRequest } from '@/lib/api/product/type';
import { markdownToHtml, parseHtmlToReactJSX } from '@/lib/markdown';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useProductCreate = () => {
    const router = useRouter();
    const [markdown, setMarkdown] = useState<string>('');
    const [reactJSX, setReactJSX] = useState<JSX.Element | null>(null);
    const [isPreview, setIsPreview] = useState<boolean>(false);
    const [formParams, setFormParams] = useState<ProductCreateRequest>({
        name: '',
        released_at: '',
        description: '',
        content: '',
        thumbnail: '',
        url: '',
    });

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

    const onCreateProduct = async (product: ProductCreateRequest) => {
        postProduct(product).then(() => {
            router.push('/admin');
        }).catch((e) => {
            console.error(e);
        });
    };

    const onChangeFormParams = (key: string, value: string) => {
        setFormParams({ ...formParams, [key]: value });
    };

    return {
        formParams,
        onChangeFormParams,
        onCreateProduct,
        isPreview,
        setIsPreview,
        reactJSX
    };
};
