import Link from "next/link";
import { memo } from "react";
import { headerStyles } from "./header.css";
import { MeIcon } from "@/components/element/Icons/me-icon";
import { LinkOutIcon } from "@/components/element/Icons/link-out";

export const Header = memo(function memorableHeader() {
  // TODO: widthが768px以下の場合はハンバーガーメニューで返す
  return (
    <div className={headerStyles.outerDiv}>
      <Link href="/" className={headerStyles.imgLink}>
        <MeIcon />
      </Link>
      <div className={headerStyles.innerDiv}>
        <Link href="/#about-me" className={headerStyles.link}>
          <p>About</p>
        </Link>
        <Link href="/blogs" className={headerStyles.link}>
          <p>Blogs</p>
        </Link>
        <Link href="/products" className={headerStyles.link}>
          <p>Products</p>
        </Link>
        <Link
          href="mailto:dai.tsuruga0809@gmail.com"
          className={headerStyles.link}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            Contact
            <LinkOutIcon />
          </p>
        </Link>
      </div>
    </div>
  );
});
