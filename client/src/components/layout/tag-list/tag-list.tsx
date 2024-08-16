import type { ComponentProps } from "react";
import { TagElement } from "@/components/element/ui/tag-element";
import type { Tag } from "@/repositories/tag";
import { tagListStyles } from "./tag-list.css";
import { clsx } from "@/libs/clsx";

type TagListProps = {
  tags: Tag[];
} & ComponentProps<"div">;

export const TagList = ({ tags, className, ...props }: TagListProps) => {
  return (
    <div className={clsx(tagListStyles.outerDiv, className)} {...props}>
      {tags.map((tag) => (
        <TagElement key={tag.id} tag={tag} />
      ))}
    </div>
  );
};
