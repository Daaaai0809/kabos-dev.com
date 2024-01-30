import { ProfileCard } from '@/components/layout/profileCard';
import * as Profile from '@/contents/profile.mdx';
import { indexStyle } from './index.css';

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
