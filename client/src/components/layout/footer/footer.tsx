import { memo } from "react";
import { footerStyles } from "./footer.css";

export const Footer = memo(function memorableFooter() {
  return (
    <div className={footerStyles.outerDiv}>
      <p className={footerStyles.p}>©Kabos 2024</p>
    </div>
  );
});
