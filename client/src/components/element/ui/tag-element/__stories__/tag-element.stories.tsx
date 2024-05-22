import "@/styles/global.css";
import { TagElement } from "@/components/element/ui/tag-element/tag-element";
import type { Tag } from "@/repositories/tag";

export default {
  title: "Element/UI/TagElement",
  component: TagElement,
};

const tag: Tag = {
  id: 1,
  name: "Tag Name",
};

const elipsisedTag: Tag = {
  id: 2,
  name: "Tag Name 222",
};

export const Default = () => <TagElement tag={tag} />;

export const Elipsised = () => <TagElement tag={elipsisedTag} />;
