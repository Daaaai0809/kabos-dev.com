import type { Tag } from "@/repositories/tag";
import { tagElementStyles } from "./tag-element.css";

type TagParams = {
  tag: Tag;
};

export const TagElement = ({ tag }: TagParams) => {
  return (
    <div id={String(tag.id)} className={tagElementStyles.outerDiv}>
      <p className={tagElementStyles.name}>{tag.name}</p>
    </div>
  );
};
