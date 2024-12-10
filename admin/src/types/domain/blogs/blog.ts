import type { Tag } from "../tags";

export interface Blog {
  id: number;
  title: string;
  url?: string;
  tagIds: number[];
  tags: Tag[];
  emoji: string;
  content?: string;
  postedAt?: string;
  createdAt: string;
}
