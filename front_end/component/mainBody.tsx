import HeadBar from "./fullHeader";
import styles from "./mainBody.module.css";
import gitHubPhoto from "../images/gitHubPhoto.jpg";
require("typeface-eb-garamond");

//  Adequate Tech Stack for fullstack Development

export default function MainBody() {
  const handleMouseOnPhoto = (el: any) => {};
  const handleMouseLeavePhoto = (el: any) => {};
  return (
    <div>
      <HeadBar />
      <div
        style={{
          backgroundColor: "black",
          rowGap: 10,
          paddingTop: "8rem",
          paddingBottom: "8rem",
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
            {" "}
            FullStack Development
          </div>
        </span>
        <img
          className={styles.imageStyle}
          src={gitHubPhoto.src}
          alt="no photo"
          onMouseEnter={handleMouseOnPhoto}
          onMouseLeave={handleMouseLeavePhoto}
        ></img>
      </div>
      <div> hrerer</div>
    </div>
  );
}
