import { CAREERS, type Career } from "@/constants/careers";
import { careerListStyles } from "./career-list.css";
import { QUALIFICATION_ICON } from "@/constants/icon-paths";

export const CareerList: React.FC = () => {
  const getIconPath = (career: Career) => {
    if (career.isQualification) {
      return QUALIFICATION_ICON;
    }

    return career.icon;
  };

  return (
    <div className={careerListStyles.outerDiv}>
      <h2 className={careerListStyles.h2}>Careers</h2>
      <table className={careerListStyles.table}>
        <tbody className={careerListStyles.tbody}>
          {CAREERS.map((career, key) => (
            <tr key={career.name} className={careerListStyles.tr}>
              <td className={careerListStyles.td}>
                <div className={careerListStyles.innerDiv}>
                  <p className={careerListStyles.startedAt}>
                    {career.startedAt}
                  </p>
                  <div className={careerListStyles.imgDiv}>
                    <img
                      src={getIconPath(career)}
                      alt={career.name}
                      className={careerListStyles.img}
                    />
                    {CAREERS[key + 1] && (
                      <span className={careerListStyles.line} />
                    )}
                  </div>
                </div>
              </td>
              <td className={careerListStyles.tdInfo}>
                <div className={careerListStyles.innerDivInfo}>
                  <p className={careerListStyles.name}>{career.name}</p>
                  <p className={careerListStyles.description}>
                    {career.description}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
