import { Button } from "@mui/material";
import styles from "./headBar.module.css";
import { GiWindHole } from "react-icons/gi";

export default function HeadBar() {
  const handleHover = (el: any) => {
    el.target.style.borderBottomStyle = "solid";
    el.target.style.borderBottomColor = "rgb(251, 235, 79)";
    el.target.style.borderBottomWidth = "0.4rem";
  };
  const handleLeave = (el: any) => {
    el.target.style.borderBottomStyle = "";
    el.target.style.borderBottomColor = "";
    el.target.style.borderBottomWidth = "";
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        // whiteSpace: "nowrap",
        backgroundColor: "white",
        top: "-0.1px",
        position: "sticky",
      }}
    >
      <div className={styles.container}>
        <div style={{ fontSize: "1.6rem", fontWeight: 500 }}>
          <span>20-</span>
          <GiWindHole />
          <span>-40</span>
        </div>
        <span
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          style={{ maxHeight: "17.5px" }}
        >
          Qualifications
        </span>
        <span
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          style={{ maxHeight: "17.5px" }}
        >
          Education
        </span>
        <span
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          style={{ maxHeight: "17.5px" }}
        >
          {" "}
          Working Experience
        </span>
        <span
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          style={{ maxHeight: "17.5px" }}
        >
          Projects
        </span>
      </div>
      <Button
        variant="outlined"
        style={{
          color: "black",
          borderColor: "#80774f",
          borderWidth: "2px",
          borderRadius: 0,
          fontFamily: "Montserrat",
          fontSize: "13px",
          fontWeight: 600,
          height: "40px",
          marginTop: "10px",
          width: "10%",
          textTransform: "none",
          marginRight: 60,
          whiteSpace: "nowrap",
        }}
      >
        Contact Me
      </Button>
    </div>
  );
}
