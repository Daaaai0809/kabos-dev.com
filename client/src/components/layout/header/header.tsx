import Link from "next/link";
import { headerStyles } from "./header.css";
import { MeIcon } from "@/components/element/Icons/me-icon";

export const Header: React.FC = () => {
  return (
    <div className={headerStyles.outerDiv}>
      <Link href="#">
        <MeIcon />
      </Link>
      <div className={headerStyles.innerDiv}>
        <Link href="#" className={headerStyles.link}>
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
};
