import { Tag } from './tag';

export type Blog = {
    id: number;
    title: string;
    thumbnail?: string;
    url: string;
    posted_at?: string;
    created_at: string;
    tags?: Tag[];
}
