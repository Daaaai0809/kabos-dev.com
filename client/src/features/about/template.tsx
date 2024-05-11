import { AboutMe } from "./components/about-me";
import { AboutMeIndex } from "./components/about-me-index";
import { CareerList } from "./components/career-list";
import { SkillList } from "./components/skill-list";

export const AboutTemplate = () => {
  return (
    <>
      <AboutMeIndex />
      <AboutMe />
      <SkillList />
      <CareerList />
    </>
  );
};
