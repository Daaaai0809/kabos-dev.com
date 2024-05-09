import { aboutMeStyles } from "./about-me.css";
import * as AboutMeMD from "@/markdown/about-me.mdx";

export const AboutMe: React.FC = () => {
  return (
    <div className={aboutMeStyles.outerDiv}>
      <h2 className={aboutMeStyles.h2}>About Me</h2>
      <div className={aboutMeStyles.innerDiv}>
        <AboutMeMD.default
          components={{
            ul: (props) => {
              return (
                <ul {...props} className={aboutMeStyles.ul}>
                  {props.children}
                </ul>
              );
            },
            a: (props) => {
              return (
                <a {...props} className={aboutMeStyles.anchor}>
                  {props.children}
                </a>
              );
            },
          }}
        />
      </div>
    </div>
  );
};
