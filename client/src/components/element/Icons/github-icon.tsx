import { gitHubIconStyle } from "./github-icon.css";

export const GitHubIcon: React.FC = () => {
  return (
    <>
      <img
        src="/icons/links/github-Black.svg"
        alt="GitHub"
        className={gitHubIconStyle}
      />
    </>
  );
};
