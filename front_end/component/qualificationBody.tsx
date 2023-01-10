import "@fontsource/montserrat";
require("typeface-eb-garamond");
import { QualificationField } from "./qualificationField";
import styles from "./qualificationBody.module.css";
import { useEffect, useState } from "react";

export const QualificationBody = () => {
  const [windowWidth, setWindowWidth] = useState(1440);
  const [screenWidth, setScreenWidth] = useState(1440);
  useEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 1440) {
        document.documentElement.style.width = "fit-content";
      } else {
        document.documentElement.style.width = "100%";
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div>
      <div
        className={styles.title}
        style={{
          fontFamily: "EB Garamond",
          whiteSpace: "nowrap",
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
        <span style={{ marginLeft: 365 }}>Development Skills</span>
      </div>
      <div
        className={styles.title}
        style={{
          fontFamily: "EB Garamond",
          marginTop: "-1%",
          whiteSpace: "nowrap",
        }}
      >
        {" "}
        with fullStack Toolkit
      </div>
      <QualificationField fieldName="Languages" />
      <QualificationField fieldName="Frameworks & Databases" />
      <QualificationField fieldName="DevOps & Tools" />
    </div>
  );
};
