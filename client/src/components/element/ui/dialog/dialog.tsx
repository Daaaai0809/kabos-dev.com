import * as D from "@radix-ui/react-dialog";
import type { ComponentProps } from "react";
import { clsx } from "@/libs/clsx";
import { X } from "react-feather";
import { dialogStyles } from "./dialog.css";

export const Dialog = {
  Root: D.Root,
  Trigger: D.Trigger,
  Portal: D.Portal,
  Overlay: ({ className, ...props }: ComponentProps<typeof D.Overlay>) => (
    <D.Overlay
      className={clsx(dialogStyles.dialogOverlay, className)}
      {...props}
    />
  ),
  Content: ({ className, ...props }: ComponentProps<typeof D.Content>) => (
    <D.Content
      className={clsx(dialogStyles.dialogContent, className)}
      {...props}
    />
  ),
  Title: ({ className, ...props }: ComponentProps<typeof D.Title>) => (
    <D.Title className={clsx(dialogStyles.dialogTitle, className)} {...props} />
  ),
  Description: ({
    className,
    ...props
  }: ComponentProps<typeof D.Description>) => (
    <D.Description
      className={clsx(dialogStyles.dialogDescription, className)}
      {...props}
    />
  ),
  RightTopClose: ({ className, ...props }: ComponentProps<typeof D.Close>) => (
    <D.Close
      className={clsx(dialogStyles.dialogRightTopClose, className)}
      {...props}
    >
      <X />
    </D.Close>
  ),
  Footer: ({ className, ...props }: ComponentProps<"div">) => (
    <div className={clsx(dialogStyles.dialogFooter, className)} {...props} />
  ),
  Close: D.Close,
};
