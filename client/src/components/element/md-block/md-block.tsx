import { clsx } from "@/libs/clsx";
import type { ComponentProps } from "react";
import { mdBlockStyles } from "./md-block.css";

type MDBlockProps = {
  parsedContent: React.ReactNode;
} & ComponentProps<"div">;

export const MDBlock = ({
  parsedContent,
  className,
  ...props
}: MDBlockProps) => {
  return (
    <div className={clsx(mdBlockStyles.outerDiv, className)} {...props}>
      {parsedContent}
    </div>
  );
};
