import { Input } from '@/components/ui/input';

type ProductFormType = 'create' | 'update';

type ProductFormProps = {
    name: string;
    releasedAt: string;
    discription: string;
    content: string;
    onChangeName: (name: string) => void;
    onChangeReleasedAt: (releasedAt: string) => void;
    onChangeDiscription: (discription: string) => void;
    onChangeContent: (content: string) => void;
    onSubmit: () => void;
    type?: ProductFormType;
    handleDelete?: () => void;
};

export const ProductForm = ({
    name,
    releasedAt,
    discription,
    content,
    onChangeName,
    onChangeReleasedAt,
    onChangeDiscription,
    onChangeContent,
    onSubmit,
    type = 'create',
    handleDelete = () => {},
}: ProductFormProps ) => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <Input label="Name" onChange={(e) => onChangeName(e.target.value)} value={name} />
                <Input label="Released At" onChange={(e) => onChangeReleasedAt(e.target.value)} value={releasedAt} type='datetime-local' />
                <Input label="Discription" onChange={(e) => onChangeDiscription(e.target.value)} value={discription} />
                <Input label="Content" onChange={(e) => onChangeContent(e.target.value)} value={content} />
                { type === 'create' && (
                    <button onClick={onSubmit}>
                        登録
                    </button>
                )}
                { type === 'update' && (
                    <div>
                        <button onClick={() => handleDelete()}>
                            削除
                        </button>
                        <button onClick={onSubmit}>
                            更新
                        </button>
                    </div>
                )}
            </form>
        </>
    );
};
