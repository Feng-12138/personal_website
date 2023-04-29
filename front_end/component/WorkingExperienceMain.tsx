import { CompanyInfo } from "./CompanyInfo";
import { Button } from "@mui/material";
import styles from "./qualificationBody.module.css";
import HeadBar from "./fullHeader";
import "@fontsource/montserrat";
import Head from "next/head";
import { CategorySeparator } from "./CategorySeparator";
import HuaweiPhoto from "../images/Huawei.jpg";
import TribalPhoto from "../images/TribalScale.jpg";
import TalkaPhoto from "../images/Talka.png";
require("typeface-eb-garamond");

export default function WorkingExperienceMain() {
  const descriptionHuawei = [
    "- Contributed to the development of the high-performance Machine-Learning Math Library by transforming the IREE open-source project as an integral component of the Huawei GPU Compiler",
    "- Spearheaded the creation of the code generator and testing tools that effectively translated IREE HAL MLIR into Vulkan C++ Host Code, for executing and evaluating device code performance on Huawei Cmodel.",
    "- Designed and implemented the IREE-preprocessing pass and General Library Link pass using LLVM which allow caller IR modules to use IREE device code IR modules as standard math operations",
    "- Even Though due to the High standard of receiving Outstanding rateing in Huawei(requires to publish papers or perform high performance optimization on compiler, which is close to impossible for Coop students who only work there for 4 months), still receive Excellent Rating with high reputation within the team and have oppotunity to return to Huawei at any time",
  ];
  const descriptionTalka = [
    "- Utilized the MVC pattern with Next.js (React) to program new web pages, diagnose and troubleshoot existing frontend issues and conceive and execute a complete router system.",
    "- Implemented new API endpoints and the associated test cases via the Controller-Service-Repository pattern and Test-Driven Development using Flask and Express.",
    "- Engineered the schema design, database management and data migration on both MySQL and MongoDB platforms",
    "- Contributed to the CI/CD pipeline by deploying and managing the painpoint platform via GCP and Kubernetes",
  ];
  const descriptionTribalScale = [
    "- Took Responsibilities of being QA Anchor of Gopuff Novus CX Team, Runn Dashboard project and 2060 Development Team",
    "- Effort recognized by the Gopuff Team, and earned extra contract for the TribalScale",
  ];
  return (
    <div style={{ width: "100vw" }}>
      <HeadBar />
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
            Experienced
          </span>
          <span style={{ marginLeft: 370 }}>Software Engineer With</span>
        </div>
        <div
          style={{
            marginTop: 35,
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          Outstanding Work Ethic and Abilities
        </div>
      </div>
      <div
        style={{
          paddingLeft: "6%",
          marginTop: 90,
          fontFamily: "montserrat",
          color: "#80774f",
          display: "flex",
          alignContent: "center",
        }}
      >
        <span>
          <div>Fast-learner and amazing employee </div>
          <div>Proved by Excellent Performance on</div>
          <div>various Engineering positions</div>
        </span>
        <Button
          variant="contained"
          style={{
            borderRadius: 0,
            backgroundColor: "#80774f",
            color: "white",
            fontFamily: "montserrat",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 2,
            marginLeft: "10%",
            maxHeight: 50,
          }}
        >
          <a
            href="/work_term_record.pdf"
            target="_blank"
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            COOP Record
          </a>
        </Button>
      </div>
      <div style={{ paddingBottom: 80, paddingTop: 50 }}>
        <CompanyInfo
          name={"Huawei Technologies Canada"}
          date={"Jan 2023 - Apr 2023"}
          description={descriptionHuawei}
          logoHref={HuaweiPhoto}
          webHref="https://www.huawei.com/ca/"
        />
        <CompanyInfo
          name={"Talka.ai"}
          date={"May 2022 - Aug 2022"}
          description={descriptionTalka}
          logoHref={TalkaPhoto}
          webHref="https://www.talka.ai/"
        />
        <CompanyInfo
          name={"TribalScale.Inc"}
          date={"Sep 2021 - Dec 2021"}
          description={descriptionTribalScale}
          logoHref={TribalPhoto}
          webHref="https://www.tribalscale.com/"
        />
      </div>
    </div>
  );
}
