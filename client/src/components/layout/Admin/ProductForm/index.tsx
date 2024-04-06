import { Input } from '@/components/ui/input';
import { productFormStyles } from './index.css';
import { Button } from '@/components/ui/button';

type ProductFormType = 'create' | 'update';

type ProductFormProps = {
    name: string;
    releasedAt: string;
    description: string;
    content: string;
    url?: string;
    onChangeName: (name: string) => void;
    onChangeReleasedAt: (releasedAt: string) => void;
    onChangeDescription: (description: string) => void;
    onChangeContent: (content: string) => void;
    onChangeUrl?: (url: string) => void;
    onSubmit: () => void;
    type?: ProductFormType;
    handleDelete?: () => void;
};

export const ProductForm = ({
    name,
    releasedAt,
    description,
    content,
    url,
    onChangeName,
    onChangeReleasedAt,
    onChangeDescription,
    onChangeContent,
    onChangeUrl = () => {},
    onSubmit,
    type = 'create',
    handleDelete = () => {},
}: ProductFormProps ) => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className={productFormStyles.form}>
                <Input label="Name" onChange={(e) => onChangeName(e.target.value)} value={name} />
                <Input label="Released At" onChange={(e) => onChangeReleasedAt(e.target.value)} value={releasedAt} type='date' />
                <Input label="URL" onChange={(e) => onChangeUrl(e.target.value)} value={url} />
                <Input label="Description" onChange={(e) => onChangeDescription(e.target.value)} value={description} />
                <Input label="Content" onChangeTextarea={(e) => onChangeContent(e.target.value)} value={content} type='content' />
                { type === 'create' && (
                    <Button onClick={onSubmit} className={productFormStyles.button}>
                        登録
                    </Button>
                )}
                { type === 'update' && (
                    <div className={productFormStyles.divButtons}>
                        <Button onClick={() => handleDelete()} className={productFormStyles.deleteButton}>
                            削除
                        </Button>
                        <Button onClick={onSubmit} className={productFormStyles.button}>
                            更新
                        </Button>
                    </div>
                )}
            </form>
        </>
    );
};
