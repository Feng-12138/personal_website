import HeadBar from "./fullHeader";
import styles from "./mainBody.module.css";
import gitHubPhoto from "../images/gitHubPhoto.jpg";
import "@fontsource/montserrat";
import router from "next/router";
import { yellow } from "@mui/material/colors";
require("typeface-eb-garamond");
import { useEffect, useState, useLayoutEffect } from "react";
import { Button } from "@mui/material";
import { ListText } from "./listText";
import WorkingInfo from "./workingInfo";
//  Adequate Tech Stack for fullstack Development

export default function MainBody() {
  const [windowWidth, setWindowWidth] = useState(1440);
  const [screenWidth, setScreenWidth] = useState(1440);
  const handleMouseOnPhoto = (el: any) => {
    el.target.style.filter = "";
  };
  const handleMouseLeavePhoto = (el: any) => {
    el.target.style.filter = "grayscale(100%)";
  };

  const handleMouseOnButton = (el: any, color: string, maxWidth: string) => {
    el.target.style.borderBottomColor = color;
    el.target.style.borderBottomWidth = "0.2rem";
    el.target.style.maxWidth = maxWidth;
    el.target.style.paddingBottom = "10px";
  };

  const handleMouseLeaveButton = (
    el: any,
    color: string,
    originalWidth: string
  ) => {
    el.target.style.borderBottomColor = color;
    el.target.style.maxWidth = originalWidth;
    el.target.style.lineHeight = "12%";
    el.target.style.paddingBottom = "";
    el.target.style.borderBottomWidth = "0.5rem";
  };

  const handleRedirection = (page: string, userId: string) => {
    router.push(`/${page}?account=${userId}`);
  };

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
    // console.log(document);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const educationTextOne =
    "University of Waterloo, Bachelor of Mathematics, Major in Computer Science, AI Specialization, Minor in Combinatorics & Optimization, level 3A";

  const educationTextTwo =
    "CGPA 93.75/100, together with highest performance rating(outstanding) in all work terms";

  const educationTextThree =
    "Equipped with strong fundemental Computer Science theories through course taken";

  const informationTalka = {
    link: "https://www.talka.ai/",
    name: "Talka.ai",
    title: "Software Engineering Intern",
    time: "MAY 2022 - AUG 2022",
  };

  const informationTribalScale = {
    link: "https://www.tribalscale.com/",
    name: "TribalScale.Inc",
    title: "Quality Assurance Engineer",
    time: "SEP 2021 - DEC 2021",
  };
  return (
    <div>
      <HeadBar />
      <div className={styles.darkCard1}>
        <span style={{ whiteSpace: "nowrap" }}>
          <span
            className={styles.headerText}
            style={{
              marginLeft: 100,
              marginTop: -35,
              textAlign: "center",
            }}
          >
            Adequate Tech Stack For
          </span>
          <div
            className={styles.headerText}
            style={{
              marginLeft: 100,
            }}
          >
            FullStack Development
          </div>
          <div
            className={styles.buttonTextTransition}
            style={{ whiteSpace: "nowrap" }}
            onMouseEnter={(el) =>
              handleMouseOnButton(el, "rgb(255, 255, 255)", "130px")
            }
            onMouseLeave={(el) => {
              handleMouseLeaveButton(el, "#666666", "100px");
            }}
          >
            EXPLORE MORE
          </div>
        </span>
        <img
          className={styles.imageStyle}
          src={gitHubPhoto.src}
          alt="no photo"
          style={{
            filter: "grayscale(100%)",
            marginLeft: "80px",
            marginRight: 60,
          }}
          onMouseEnter={handleMouseOnPhoto}
          onMouseLeave={handleMouseLeavePhoto}
        ></img>
      </div>
      <div className={styles.whiteCard1}>
        <div className={styles.greyWhiteCard1}>
          <div
            style={{
              backgroundColor: "rgb(251, 235, 79)",
              width: (240 / 1440) * windowWidth,
              height: 10,
              // position: "absolute",
              marginLeft: -250,
              marginTop: 15,
            }}
          ></div>
          <div
            className={styles.headerText}
            style={{
              color: "black",
              textAlign: "center",
              paddingRight: 50,
              paddingLeft: 50,
              marginBottom: 35,
              fontSize: 40,
            }}
          >
            Most Outstanding Academic Record
          </div>
          <ListText text={educationTextOne} windowWidth={windowWidth} />
          <ListText text={educationTextThree} windowWidth={windowWidth} />
          <ListText text={educationTextTwo} windowWidth={windowWidth} />
          <div
            className={styles.buttonEducation}
            style={{
              marginLeft:
                ((windowWidth - 410 - 200) / (1440 - 410 - 200)) * 600,
              marginTop: "50px",
              whiteSpace: "nowrap",
              maxWidth: 125,
            }}
            onMouseEnter={(el) =>
              handleMouseOnButton(el, "rgb(251, 235, 79)", "200px")
            }
            onMouseLeave={(el) => {
              handleMouseLeaveButton(el, "rgb(251, 235, 79)", "125px");
            }}
          >
            EXPLORE FURTHER
          </div>
        </div>
      </div>
      <div
        className={styles.greyDecorate}
        style={{ marginLeft: windowWidth * 0.92 }}
      ></div>
      <div
        className={styles.darkCard1}
        style={{
          paddingLeft: 105,
          paddingRight: 205,
          textAlign: "left",
          // whiteSpace: "normal",
        }}
      >
        <div
          className={styles.headerText}
          style={{ width: "100%", zIndex: 20 }}
        >
          {" "}
          Grow Like Nasdaq!
          <div
            style={{
              width: "100%",
              color: "#9a9a9a",
              fontFamily: "Montserrat",
              fontStyle: "normal",
              marginRight: "200px",
              fontSize: 17,
              marginTop: 10,
            }}
          >
            Adepted Software Development skills and Proven Work Ethic guarantee
            my success in any technical positions
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 50,
              marginLeft: -40,
            }}
          >
            <WorkingInfo information={informationTalka} />
            <WorkingInfo information={informationTribalScale} />
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
          >
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
                borderRadius: 0,
                fontFamily: "Montserrat",
                fontSize: 13,
                height: 40,
                width: 125,
                textTransform: "none",
              }}
            >
              View&nbsp; Details
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.whiteCard1}>Too Young to Enjoy Life</div>
    </div>
  );
}
