import { ContentArea } from "@/components/element/ui/content-area";
import type { Tag } from "@/repositories/tag";
import type React from "react";
import { blogContentStyles } from "./blog-content.css";
import { TagList } from "@/components/layout/tag-list";
import { MDBlock } from "@/components/element/md-block";

type BlogContentProps = {
  title: string;
  emoji?: string;
  tags: Tag[];
  parsedContent: React.ReactNode;
};

export const BlogContent = (props: BlogContentProps) => {
  return (
    <div className={blogContentStyles.outerDiv}>
      <div className={blogContentStyles.innerTitleDiv}>
        <h1 className={blogContentStyles.h1}>{props.emoji}</h1>
        <h2 className={blogContentStyles.h2}>{props.title}</h2>
      </div>
      <div className={blogContentStyles.innerContentDiv}>
        <TagList tags={props.tags} className={blogContentStyles.tagList} />
        <ContentArea>
          <MDBlock parsedContent={props.parsedContent} />
        </ContentArea>
      </div>
    </div>
  );
};
