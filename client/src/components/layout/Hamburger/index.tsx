import { useEffect, useRef, useState } from 'react';
import { hamburgerStyle } from './hamburger.css';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ICONS } from '@/constants/icons';
import Link from 'next/link';

export const Hamburger = () => {
    const [isOpened, setIsOpened] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClick = () => {
        setIsOpened(!isOpened);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsOpened(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={hamburgerStyle.link} ref={menuRef}>
            <Button onClick={onClick} className={hamburgerStyle.hamburgerButton} ref={buttonRef}>
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
                            <Link href="/products" className={hamburgerStyle.hamburgerAnchor.list}>Products</Link>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <Link href="mailto:dai.tsuruga0809@gmail.com" className={hamburgerStyle.hamburgerAnchor.list}>Contact</Link>
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
