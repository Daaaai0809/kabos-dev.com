import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogFormStyles } from './index.css';

type BlogFormType = 'create' | 'update';

type BlogFormProps = {
    title: string;
    url: string;
    postedAt: string;
    onChangeTitle: (title: string) => void;
    onChangeUrl: (url: string) => void;
    onChangePostedAt: (postedAt: string) => void;
    onSubmit: () => void;
    type?: BlogFormType;
    handleUpdate?: () => void;
    handleDelete?: () => void;
};

export const BlogForm = ({
    title,
    url,
    postedAt,
    onChangeTitle,
    onChangeUrl,
    onChangePostedAt,
    onSubmit,
    type = 'create',
    handleDelete = () => {},
}: BlogFormProps ) => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className={blogFormStyles.form}>
                <Input label="Title" onChange={(e) => onChangeTitle(e.target.value)} value={title} />
                <Input label="URL" onChange={(e) => onChangeUrl(e.target.value)} value={url} />
                {/* 投稿日時 */}
                <Input label="Posted At" onChange={(e) => onChangePostedAt(e.target.value)} value={postedAt} type='datetime-local' />
                { type === 'create' && (
                    <Button onClick={onSubmit} className={blogFormStyles.button}>
                        登録
                    </Button>
                )}
                { type === 'update' && (
                    <div className={blogFormStyles.divButtons}>
                        <Button onClick={() => handleDelete()} className={blogFormStyles.deleteButton}>
                            削除
                        </Button>
                        <Button onClick={onSubmit} className={blogFormStyles.button}>
                            更新
                        </Button>
                    </div>
                )}
            </form>
        </>
    );
};
