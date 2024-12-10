export interface CreateBlogRequest {
  title: string;
  url?: string;
  emoji: string;
  content?: string;
  postedAt?: string;
  tagIds: number[];
}
