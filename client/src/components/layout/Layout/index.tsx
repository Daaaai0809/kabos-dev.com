import React from 'react';
import { Hamburger } from '../hamburger';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Hamburger />
            {children}
        </div>
    );
};

export default Layout;
