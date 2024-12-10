export interface UpdateBlogRequest {
  title: string;
  url?: string;
  emoji: string;
  content?: string;
  postedAt?: string;
  tagIds: number[];
}
