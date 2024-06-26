import Link from "next/link";
import { BlogCardStyles } from "./blog-card.css";
import type { Blog } from "@/repositories/blogs";
import { NO_EMOJI } from "@/constants/blog";
import { ZennLink } from "@/components/element/Icons/zenn-link";
import { LinkOutIcon } from "@/components/element/Icons/link-out";
import { TagList } from "@/components/layout/tag-list";

interface BlogCardParams {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardParams) => {
  const hasUrl = (blog: Blog) => blog.url !== undefined && blog.url !== "";

  const getBlogPath = (blog: Blog) =>
    hasUrl(blog) ? blog.url : `/blogs/${blog.id}`;

  const getEmoji = (blog: Blog) => (blog.emoji ? blog.emoji : NO_EMOJI);

  const getInnerLinkDivStyle = (blog: Blog) =>
    hasUrl(blog)
      ? BlogCardStyles.innerLinkDivHasUrl
      : BlogCardStyles.innerLinkDiv;

  const getOuterPageIcon = (path: string) => {
    if (path === "") return <span> </span>;

    if (path.includes("zenn.dev")) {
      return (
        <>
          <ZennLink />
          <LinkOutIcon />
        </>
      );
    }

    return <LinkOutIcon />;
  };

  return (
    <>
      <Link
        key={blog.id}
        href={getBlogPath(blog)}
        className={BlogCardStyles.link}
      >
        <p className={BlogCardStyles.emoji}>{getEmoji(blog)}</p>
        <div className={getInnerLinkDivStyle(blog)}>
          <div className={BlogCardStyles.metaDiv}>
            <p className={BlogCardStyles.title}>{blog.title}</p>
            <TagList tags={blog.tags} className={BlogCardStyles.tagList} />
          </div>
          <div className={BlogCardStyles.otherPageDiv}>
            {getOuterPageIcon(blog.url)}
          </div>
        </div>
      </Link>
    </>
  );
};
