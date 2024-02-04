import Link from 'next/link';
import { BlogCardProps } from './type';

export const BlogCard = (props: BlogCardProps) => {
    const { title, url, thumbnail, created_at } = props.blog;

    return (
        <>
            <Link href={url}>
                <div>
                    <div>
                        <img src={thumbnail} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <p>{created_at}</p>
                </div>
            </Link>
        </>
    );
}
