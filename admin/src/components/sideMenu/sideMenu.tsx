import { sideMenuStyles } from "./sideMenu.css"

export const SideMenu = () => (
    <>
        <div className={sideMenuStyles.main}>
            <div className={sideMenuStyles.title}>
                <p>ポトフの管理室</p>
            </div>
            <div className={sideMenuStyles.menuListDiv}>
                <ul className={sideMenuStyles.menuList}>
                    <li className={sideMenuStyles.menuItem}>
                        <a href="/blog" className={sideMenuStyles.menuLink}>ブログ管理</a>
                    </li>
                    <li className={sideMenuStyles.menuItem}>
                        <a href="/tag" className={sideMenuStyles.menuLink}>タグ管理</a>
                    </li>
                    <li className={sideMenuStyles.menuItem}>
                        <a href="/product" className={sideMenuStyles.menuLink}>製作物管理</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
)

// TODO: Mobileデバイスの際はボタンを押すとサイドメニューがスライドインされるようにする
export const SideMenuMobile = () => (
    <>
    </>
);
