import { useState } from 'react';
import { hamburgerStyle } from './hamburger.css';
import { Button } from '@/components/ui/button/button';
import { Icon } from '@/components/ui/icon/icon';
import { ICONS } from '@/constants/icons';
import Link from 'next/link';

export const Hamburger = () => {
    const [isOpened, setIsOpened] = useState(false);

    const onClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className={hamburgerStyle.link}>
            <Button onClick={onClick} className={hamburgerStyle.hamburgerButton}>
                <Icon icon={isOpened ? ICONS.cross : ICONS.hamburger}/>
            </Button>
            {isOpened && (
                <div className={hamburgerStyle.hamburger}>
                    <div className={hamburgerStyle.hamburgerOuter}>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <Link href="/" className={hamburgerStyle.hamburgerAnchor.list}>About</Link>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <Link href="/blogs" className={hamburgerStyle.hamburgerAnchor.list}>Blogs</Link>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <Link href="#" className={hamburgerStyle.hamburgerAnchor.list}>Projects</Link>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <Link href="#" className={hamburgerStyle.hamburgerAnchor.list}>Contact</Link>
                        </div>
                    </div>
                    <span className={hamburgerStyle.hamburgerSpan}>
                        <Link href="https://github.com/Daaaai0809" className={hamburgerStyle.hamburgerAnchor.anchor}>
                            <Icon icon={ICONS.light_github} />
                        </Link>
                        <Link href="https://x.com/daradara_kabos" className={hamburgerStyle.hamburgerAnchor.anchor}>
                            <Icon icon={ICONS.light_x} />
                        </Link>
                    </span>
                </div>
            )}
        </div>
    );
};
