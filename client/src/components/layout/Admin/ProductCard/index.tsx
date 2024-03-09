import Link from 'next/link';
import { productCardStyles } from './index.css';

type ProductCardProps = {
    id: number;
    name: string;
    url: string;
};

export const ProductCard = (props: ProductCardProps) => {
    return (
        <Link href="#" className={productCardStyles.link}>
            <div className={productCardStyles.mainDiv}>
                <p className={productCardStyles.pId}>{props.id}</p>
                <div className={productCardStyles.div}>
                    <p className={productCardStyles.pName}>{props.name}</p>
                    <p className={productCardStyles.pUrl}>{props.url}</p>
                </div>
            </div>
        </Link>
    );
}
