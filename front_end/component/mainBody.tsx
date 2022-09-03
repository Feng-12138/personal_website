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

  const handleRedirection = (page: string, userId: string) => {
    router.push(`/${page}?account=${userId}`);
  };

  return (
    <div>
      <HeadBar />
      <div className={styles.darkCard1}>
        <span>
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
          here and thererpfojf fwefheiof fjqeiofhe fewpf
        </div>
      </div>
    </div>
  );
}
