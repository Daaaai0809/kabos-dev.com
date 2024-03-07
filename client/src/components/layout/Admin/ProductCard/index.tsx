import Link from "next/link";

type ProductCardProps = {
    id: number;
    title: string;
};

export const ProductCard = (props: ProductCardProps) => {
    return (
        <Link href="#">
            <div>
                <p>{props.id}</p>
                <h2>{props.title}</h2>
            </div>
        </Link>
    );
}
