import { SideMenu } from "../sideMenu";
import { layoutStyles } from "./layout.css";

export const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <div className={layoutStyles.main}>
            <SideMenu />
            <div className={layoutStyles.content}>
                {children}
            </div>
        </div>
    </>
);
