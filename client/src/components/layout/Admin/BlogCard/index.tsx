import Link from 'next/link';
import { blogCardStyles } from './index.css';

type BlogCardProps = {
    id: number;
    title: string;
    url: string;
};

export const BlogCard = (props: BlogCardProps) => {
    const { id, title, url } = props;

    return (
        <Link href={`/admin/blog/${id}`} className={blogCardStyles.link}>
            <div className={blogCardStyles.mainDiv}>
                <p className={blogCardStyles.pId}>{id}</p>
                <div className={blogCardStyles.div}>
                    <p className={blogCardStyles.pTitle}>{title}</p>
                    <p className={blogCardStyles.pUrl}>{url}</p>
                </div>
            </div>
        </Link>
    )
}
