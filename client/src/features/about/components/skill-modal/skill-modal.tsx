import { Dialog } from "@/components/element/ui/dialog";
import type { Skill } from "@/constants/skills";
import { skillModalStyles } from "./skill-modal.css";

type SkillModalProps = {
  skill: Skill;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export const SkillModal: React.FC<SkillModalProps> = ({
  skill,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Overlay />
      <Dialog.Content className={skillModalStyles.content}>
        <Dialog.RightTopClose />
        <Dialog.Title className={skillModalStyles.title}>
          <img
            src={skill.icon}
            alt={skill.name}
            className={skillModalStyles.img}
          />
          {skill.name}
        </Dialog.Title>
        <Dialog.Description>{skill.description}</Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};
