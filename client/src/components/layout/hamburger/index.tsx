import { useState } from 'react';
import { hamburgerStyle } from './hamburger.css';
import { Button } from '@/components/ui/button/button';
import { Icon } from '@/components/ui/icon/icon';
import { ICONS } from '@/constants/icons';

export const Hamburger = () => {
    const [isOpened, setIsOpened] = useState(false);

    const onClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className={hamburgerStyle.link}>
            <Button onClick={onClick} className={hamburgerStyle.hamburgerButton}>
                <Icon icon={isOpened ? ICONS.cross : ICONS.hamburger} />
            </Button>
            {isOpened && (
                <div className={hamburgerStyle.hamburger}>
                    <div className={hamburgerStyle.hamburgerOuter}>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <a href="/" className={hamburgerStyle.hamburgerAnchor.list}>About</a>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <a href="#" className={hamburgerStyle.hamburgerAnchor.list}>Blogs</a>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <a href="#" className={hamburgerStyle.hamburgerAnchor.list}>Projects</a>
                        </div>
                        <div className={hamburgerStyle.hamburgerInner}>
                            <a href="#" className={hamburgerStyle.hamburgerAnchor.list}>Contact</a>
                        </div>
                    </div>
                    <span className={hamburgerStyle.hamburgerSpan}>
                        <a href="https://github.com/Daaaai0809" className={hamburgerStyle.hamburgerAnchor.anchor}>
                            <Icon icon={ICONS.light_github} />
                        </a>
                        <a href="https://x.com/daradara_kabos" className={hamburgerStyle.hamburgerAnchor.anchor}>
                            <Icon icon={ICONS.light_x} />
                        </a>
                    </span>
                </div>
            )}
        </div>
    );
};
