import { ProfileCard } from '@/components/layout/profileCard';
import * as Profile from '@/contents/profile.mdx';
import { Inter } from "next/font/google";
import { indexStyle } from './index.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={indexStyle.profile}>
        <ProfileCard />
        <div className={indexStyle.profileText}>
          <Profile.default />
        </div>
      </div>
    </>
  );
}
