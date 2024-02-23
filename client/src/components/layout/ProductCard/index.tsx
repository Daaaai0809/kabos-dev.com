import { ProductCardProps } from './type';
import { productCardStyles } from './index.css';
import Link from 'next/link';
import { NO_IMAGE_URL } from '@/constants/images';

export const ProductCard = ({ product }: ProductCardProps) => {
    if (!product) return null;

    const { id, name, url, description, thumbnail, released_at } = product;

    const dt = released_at ? new Date(released_at).toISOString().split('T')[0] : ''

    return (
        <>
            <Link href={url} className={productCardStyles.link} id='product-card'>
                <img src={thumbnail||NO_IMAGE_URL} alt={name} className={productCardStyles.thumbnail} />
                <div className={productCardStyles.innerDiv}>
                    <div className={productCardStyles.contextDiv}>
                        <div className={productCardStyles.titleDiv}>
                            <h2 className={productCardStyles.h2}>
                                {name}
                            </h2>
                            <p className={productCardStyles.date}>
                                {dt}
                            </p>
                        </div>
                        <div className={productCardStyles.discriptionDiv}>
                            <p className={productCardStyles.p}>
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className={productCardStyles.introductionDiv}>
                        <Link href={`/products/${id}`} className={productCardStyles.introductionLink} >
                            <p className={productCardStyles.introductionLinkText}>
                                Introduction
                            </p>
                        </Link>
                    </div>
                </div>
            </Link>
        </>
    );
};
