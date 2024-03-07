import React from 'react';
import { Hamburger } from '../Hamburger';
import { adminIndexStyle } from './index.css';
import { useCheckAuth } from '@/hooks/useCheckAuth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isLoading } = useCheckAuth(() => {}, router);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={adminIndexStyle.main}>
            <div className={adminIndexStyle.header}>
                <ul className={adminIndexStyle.ul}>
                    <li className={adminIndexStyle.li}>
                        <Link href="#" className={adminIndexStyle.a}>Blog作成</Link>
                    </li>
                    <li className={adminIndexStyle.li}>
                        <Link href="#" className={adminIndexStyle.a}>Product作成</Link>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default AdminLayout;
