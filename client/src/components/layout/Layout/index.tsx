import React from 'react';
import { Hamburger } from '../hamburger';
import { indexStyle } from './index.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={indexStyle.main}>
            <div className={indexStyle.header}>
                <Hamburger />
            </div>
            {children}
        </div>
    );
};

export default Layout;
