import "@fontsource/montserrat";
require("typeface-eb-garamond");
import styles from "./qualificationBody.module.css";

export const QualificationBody = () => {
  return (
    <div>
      <div
        className={styles.title}
        style={{
          fontFamily: "EB Garamond",
        }}
      >
        <span
          style={{
            borderBottomColor: "rgb(251, 235, 79)",
            borderBottomStyle: "solid",
            borderBottomWidth: "0.625rem",
            position: "absolute",
          }}
        >
          Professional
        </span>
        <span style={{ marginLeft: "26.6%" }}>Development Skills</span>
      </div>
      <div
        className={styles.title}
        style={{ fontFamily: "EB Garamond", marginTop: "-1%" }}
      >
        {" "}
        with fullStack Toolkit
      </div>
      ;
    </div>
  );
};
