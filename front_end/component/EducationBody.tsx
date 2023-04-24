import HeadBar from "./fullHeader";
import styles from "./qualificationBody.module.css";
import { CategorySeparator } from "./CategorySeparator";
import { GPAAndTranscript } from "./GPAAndTranscript";
import { RelatedCourses } from "./RelatedCourses";
import "@fontsource/montserrat";
require("typeface-eb-garamond");

export const EducationBody = () => {
  return (
    <div style={{ width: "100vw" }}>
      <HeadBar></HeadBar>
      <div
        className={styles.title}
        style={{
          fontFamily: "EB Garamond",
          whiteSpace: "nowrap",
        }}
      >
        <div>
          <span
            style={{
              borderBottomColor: "rgb(251, 235, 79)",
              borderBottomStyle: "solid",
              borderBottomWidth: "0.625rem",
              position: "absolute",
            }}
          >
            Top Level
          </span>
          <span style={{ marginLeft: 310 }}>CS Student studying</span>
        </div>
        <div
          style={{
            marginTop: 35,
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          at University of Waterloo
        </div>
      </div>
      <div
        style={{
          paddingLeft: "6%",
          marginTop: 90,
          fontFamily: "montserrat",
          color: "#80774f",
        }}
      >
        <div>A Quick Learner and a Man With Great Protential </div>
        <div>Proven by Outstanding Academic Records</div>
      </div>
      <CategorySeparator name={"GPA & Transcript"} />
      <GPAAndTranscript />
      <CategorySeparator name={"Taken CS & Math Courses"} />
      <RelatedCourses />
    </div>
  );
};
