import Link from 'next/link';

type BlogCardProps = {
    id: number;
    title: string;
    path: string;
};

export const BlogCard = (props: BlogCardProps) => {
    return (
        <Link href="#">
            <div>
                <p>{props.id}</p>
                <p>{props.title}</p>
                <p>{props.path}</p>
            </div>
        </Link>
    )
}
