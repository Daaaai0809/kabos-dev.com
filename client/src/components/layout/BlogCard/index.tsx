import Link from 'next/link';
import { BlogCardProps } from './type';
import { blogCardStyles } from './index.css';
import { NO_IMAGE_URL } from '@/constants/images';

export const BlogCard = (props: BlogCardProps) => {
    if (!props.blog) return null;

    const { title, url, thumbnail, posted_at, created_at } = props.blog;

    const date = posted_at || created_at;

    const dt = new Date(date).toISOString().split('T')[0] || '';

    return (
        <>
            <Link href={url} className={blogCardStyles.link}>
                <img src={thumbnail||NO_IMAGE_URL} alt={title} className={blogCardStyles.thumbnail} />
                <div className={blogCardStyles.contextDiv}>
                    <h3 className={blogCardStyles.h3}>
                        {title}
                    </h3>
                    <p className={blogCardStyles.p}>
                        {dt}
                    </p>
                </div> 
            </Link>
        </>
    );
}
