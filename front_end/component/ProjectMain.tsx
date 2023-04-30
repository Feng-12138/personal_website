import HeadBar from "./fullHeader";
import styles from "./qualificationBody.module.css";
import { ProjectComponent } from "./ProjectComponent";
import "@fontsource/montserrat";
require("typeface-eb-garamond");

export const ProjectMain = () => {
  const descriptionMeInLoo = [
    "- Provide the platform for users to share their favourite memes with other users.",
    "- Features include user signup/login, searching by tags, memes uploading/downloading, points calculation, and liking/reporting memes.",
    "- Use Next.js for frontend, Flask for backend, MySQL and MinIO as databases",
    "- GitHub Repo: https://github.com/joycedaiyt/Me-In-Loo",
    "- Demo Video: https://www.loom.com/share/529a819b8a96489698a9fcc8169b3556",
  ];
  const descriptionPersonalWebsite = [
    "- Provide Users opportunities to obtain their customized personal Website, and share it to the recruiters",
    "- Use Next.js for frontend, Express for backend and MongoDB as the database",
    "- Currently Still under development",
    "- GitHub Repo: https://github.com/Feng-12138/personal_website",
  ];
  const descriptionYJK = [
    "- Plan to build B2C clothing Sell platform as cheaper version of SSENSE",
    "- Use Next.js for frontend, Gin(Golang) for backend and MongoDB as the database",
    "- Currently Still under development",
    "- GitHub Repo: https://github.com/Feng-12138/YJK",
  ];
  return (
    <div style={{ width: "100vw" }}>
      <HeadBar />
      <div
        className={styles.title}
        style={{
          fontFamily: "EB Garamond",
          whiteSpace: "nowrap",
          fontSize: "4.0rem",
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
            Proven
          </span>
          <span style={{ marginLeft: 190 }}>
            Self-Initiative and Implementation
          </span>
        </div>
        <div
          style={{
            marginTop: 35,
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          Skills Through Multiple Personal Projects
        </div>
      </div>
      <div
        style={{
          paddingLeft: "6%",
          paddingRight: "65%",
          fontFamily: "montserrat",
          color: "#80774f",
          alignContent: "center",
        }}
      >
        <div>
          Never over-confidence and always cherish every learning opportunities
          to continuously to improve professional skills
        </div>
      </div>
      <div style={{ paddingBottom: 50 }}>
        <ProjectComponent
          name="Me-In-Loo"
          date="Sep 2022 - Dec 2022"
          description={descriptionMeInLoo}
          gitHubLink="https://github.com/joycedaiyt/Me-In-Loo"
        />
        <ProjectComponent
          name="Personal Website"
          date="Sep 2022 - Current"
          description={descriptionPersonalWebsite}
          gitHubLink="https://github.com/Feng-12138/personal_website"
        />
        <ProjectComponent
          name="YJK Studio"
          date="Dec 2022 - Current"
          description={descriptionYJK}
          gitHubLink="https://github.com/Feng-12138/YJK"
        />
      </div>
    </div>
  );
};
