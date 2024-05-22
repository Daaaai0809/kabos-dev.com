import { meIconStyles } from "./me-icon.css";

type MeIconProps = {
  type?: "header" | "index";
};

export const MeIcon: React.FC<MeIconProps> = ({ type = "header" }) => {
  const style = type === "header" ? meIconStyles.header : meIconStyles.index;

  return (
    <>
      <img src="/icons/me.svg" alt="Me" className={style} />
    </>
  );
};
