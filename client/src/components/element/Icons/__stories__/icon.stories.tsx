import "@/styles/global.css";
import { GitHubIcon } from "../github-icon";
import { MeIcon } from "../me-icon";
import { XIcon } from "../x-icon";
import { ZennIcon } from "../zenn-icon";

const meta = {
  title: "Icons",
};

export default meta;

const ICONS = {
  MeIcon,
  ZennIcon,
  XIcon,
  GitHubIcon,
};

export const Overview = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(ICONS).map(([name, Icon]) => (
        <div key={name} className="flex flex-col items-center">
          <Icon />
          {name === "MeIcon" && <Icon type="index" />}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};
