import Link from 'next/link';
import { BlogCardProps } from './type';
import { blogCardStyles } from './index.css';

export const BlogCard = (props: BlogCardProps) => {
    const { title, url, thumbnail, created_at } = props.blog;

    return (
        <>
            <Link href={url} className={blogCardStyles.link}>
                <img src={thumbnail} alt={title} className={blogCardStyles.thumbnail} />
                <div className={blogCardStyles.contextDiv}>
                    <h2 className={blogCardStyles.h2}>
                        {title}
                    </h2>
                    <p className={blogCardStyles.p}>
                        {created_at}
                    </p>
                </div> 
            </Link>
        </>
    );
}
