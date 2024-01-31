import Link from 'next/link';
import { useLinkCard } from './useLinkCard';
import { linkCard } from './link-card.css';

type Props = {
    url: string;
};

export const LinkCard = ({ url }: Props) => {
    const ogp = useLinkCard(url);
    // ogpに値が入るまで表示しない
    if (!ogp) return null;

    console.log(ogp);

    return (
        <Link href={ogp.url || url} className={linkCard.link}>
            <img src={ogp.image} alt={ogp.title} className={linkCard.image} />
            <div className={linkCard.div}>
                <h3 className={linkCard.h3}>{ogp.title}</h3>
                <p className={linkCard.p}>{ogp.description}</p>
            </div>
        </Link>
    );
};
