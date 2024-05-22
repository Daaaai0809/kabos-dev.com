import type { ComponentProps } from "react";
import { contentAreaStyle } from "./content-area.css";

type ContentAreaProps = ComponentProps<"div">;

export const ContentArea = ({ children }: ContentAreaProps) => {
  return (
    <>
      <div className={contentAreaStyle}>{children}</div>
    </>
  );
};
