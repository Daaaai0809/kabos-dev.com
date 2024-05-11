import Link from "next/link";
import { memo } from "react";
import { headerStyles } from "./header.css";
import { MeIcon } from "@/components/element/Icons/me-icon";

export const Header = memo(function memorableHeader() {
  // TODO: widthが768px以下の場合はハンバーガーメニューで返す
  return (
    <div className={headerStyles.outerDiv}>
      <Link href="/" className={headerStyles.imgLink}>
        <MeIcon />
      </Link>
      <div className={headerStyles.innerDiv}>
        <Link href="/#about-me" className={headerStyles.link}>
          About
        </Link>
        <Link href="#" className={headerStyles.link}>
          Blogs
        </Link>
        <Link href="#" className={headerStyles.link}>
          Works
        </Link>
        <Link href="#" className={headerStyles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
});
