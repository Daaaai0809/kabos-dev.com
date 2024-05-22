import { forwardRef } from "react";
import { GitHubIcon } from "@/components/element/Icons/github-icon";
import { MeIcon } from "@/components/element/Icons/me-icon";
import { XIcon } from "@/components/element/Icons/x-icon";
import { ZennIcon } from "@/components/element/Icons/zenn-icon";
import { aboutMeIndexStyles } from "./about-me-index.css";
import Link from "next/link";
import { PATHS } from "@/constants/paths";

export const AboutMeIndex = () => {
  return (
    <div className={aboutMeIndexStyles.outerDiv}>
      <MeIcon type="index" />
      <div className={aboutMeIndexStyles.innerDiv}>
        <div className={aboutMeIndexStyles.pDIv}>
          <p className={aboutMeIndexStyles.nameP}>Kabos / Daaaai0809</p>
          <p className={aboutMeIndexStyles.akaP}>Softwear Engineer</p>
        </div>
        <div className={aboutMeIndexStyles.iconsDiv}>
          <Link href={PATHS.GITHUB} className={aboutMeIndexStyles.link}>
            <GitHubIcon />
          </Link>
          <Link href={PATHS.X} className={aboutMeIndexStyles.link}>
            <XIcon />
          </Link>
          <Link href={PATHS.ZENN} className={aboutMeIndexStyles.link}>
            <ZennIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
