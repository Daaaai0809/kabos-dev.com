import "@/styles/global.css";
import { TagList } from "../tag-list";
import type { Tag } from "@/repositories/tag";

export default {
  title: "Layout/TagList",
  component: TagList,
};

const tags: Tag[] = [
  { id: 1, name: "tag1" },
  { id: 2, name: "tag2" },
  { id: 3, name: "tag3" },
];

export const Default = () => <TagList tags={tags} />;
