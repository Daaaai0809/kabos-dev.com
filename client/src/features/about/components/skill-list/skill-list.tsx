import { SKILLS, type Skill } from "@/constants/skills";
import { skillListStyles } from "./skill-list.css";
import { useRef, useState } from "react";
import { SkillModal } from "../skill-modal";

export const SkillList = () => {
  const outerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const getInnerDivStyle = () =>
    isExpanded ? skillListStyles.innerDiv : skillListStyles.innerDivClose;
  const getShowDivStyle = () =>
    isExpanded ? skillListStyles.showLessDiv : skillListStyles.showMoreDiv;
  const arrowMsg = isExpanded ? "Show Less" : "Show More";
  const arrowPath = isExpanded
    ? "/icons/show-less.svg"
    : "/icons/show-more.svg";

  const onClickArrow = () => {
    const outerTop = outerRef.current?.offsetTop || 0;
    if (outerTop) {
      window.scrollTo({ top: outerTop - 100, behavior: "smooth" });
    }

    setIsExpanded(!isExpanded);
  };

  const onOpenModal = (skill: Skill) => {
    setIsOpen(true);
    setSelectedSkill(skill);
  };

  const cutDescription = (description: string) => {
    if (description.length > 35) {
      return `${description.slice(0, 35)}...`;
    }

    return description;
  };

  return (
    <>
      <div className={skillListStyles.outerDiv} ref={outerRef} id="skills">
        <h2 className={skillListStyles.h2}>Skills</h2>
        <div className={getInnerDivStyle()}>
          {SKILLS.map((skill) => (
            <button
              type="button"
              key={skill.name}
              className={skillListStyles.cardButton}
              onClick={() => onOpenModal(skill)}
            >
              <div className={skillListStyles.cardHeadDiv}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={skillListStyles.img}
                />
                <p className={skillListStyles.name}>{skill.name}</p>
              </div>
              <p className={skillListStyles.description}>
                {cutDescription(skill.description || "")}
              </p>
            </button>
          ))}
        </div>
        <div className={getShowDivStyle()}>
          <button
            type="button"
            className={skillListStyles.showMoreButton}
            onClick={onClickArrow}
          >
            <p className={skillListStyles.showMore}>{arrowMsg}</p>
            <img
              src={arrowPath}
              alt="arrow"
              className={skillListStyles.arrow}
            />
          </button>
        </div>
      </div>
      <SkillModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        skill={selectedSkill ?? { name: "", description: "", icon: "" }}
      />
    </>
  );
};
