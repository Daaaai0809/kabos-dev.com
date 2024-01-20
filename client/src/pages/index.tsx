import { ProfileCard } from '@/components/layout/profileCard';
import * as Profile from '@/contents/profile.mdx';
import { Inter } from "next/font/google";
import { indexStyle } from './index.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={indexStyle.profile}>
      <ProfileCard />
      <Profile.default className={indexStyle.profileText} />
    </div>
  );
}
