import HeadBar from "./fullHeader";
import styles from "./mainBody.module.css";
import gitHubPhoto from "../images/gitHubPhoto.jpg";
import "@fontsource/montserrat";
import router from "next/router";
require("typeface-eb-garamond");

//  Adequate Tech Stack for fullstack Development

export default function MainBody() {
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

  const handleRedirection = (page: string) => {
    router.push(`/${page}`);
  };

  return (
    <div>
      <HeadBar />
      <div
        style={{
          backgroundColor: "black",
          rowGap: 10,
          paddingTop: "4rem",
          paddingBottom: "4rem",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
      >
        <span>
          <span
            className={styles.headerText}
            style={{
              marginLeft: 100,
              marginTop: -35,
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
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontSize: 13,
              fontWeight: "bold",
              fontStyle: "normal",
              letterSpacing: "2px",
              cursor: "pointer",
              borderBottomStyle: "solid",
              borderBottomColor: "#666666",
              borderBottomWidth: "0.5rem",
              maxWidth: "100px",
              marginLeft: "500px",
              marginTop: "60px",
              lineHeight: "12%",
              position: "absolute",
            }}
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
      <div> hrerer</div>
    </div>
  );
}
