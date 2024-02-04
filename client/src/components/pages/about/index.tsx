import { ProfileCard } from '@/components/layout/ProfileCard';
import * as Profile from '@/contents/profile.mdx';
import { indexStyle } from './index.css';

export const AboutPage = () => (
    <>
      <div className={indexStyle.profile}>
        <ProfileCard />
        <div className={indexStyle.profileText}>
          <Profile.default />
        </div>
      </div>
    </>
)
