import { AboutMe } from "./components/about-me";
import { CareerList } from "./components/career-list";
import { SkillList } from "./components/skill-list";

export const AboutTemplate: React.FC = () => {
  return (
    <>
      <AboutMe />
      <SkillList />
      <CareerList />
    </>
  );
};
