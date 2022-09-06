import { Grid, Button, Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import router from "next/router";
require("typeface-eb-garamond");
import "@fontsource/montserrat";
import { GiWindHole } from "react-icons/gi";
import { useState, useEffect } from "react";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

function HomePage(props: {}) {
  const [windowWidth, setWindowWidth] = useState(1440);
  useEffect(() => {
    function updateSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const handleEnterMainPage = () => {
    router.push("/main?account=yiran");
  };
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "black",
        zIndex: 20,
        width: windowWidth,
      }}
    >
      <div className="waterPrint">
        <span>By 20-</span>
        <GiWindHole />
        <span>-40 Studio</span>
      </div>
      <div className="heading">
        <div className="headingFont">Welcome To The World Of</div>
        <div className="headingFont"> Yiran Sun !</div>
        <Button
          variant="outlined"
          style={{
            color: "white",
            borderColor: "white",
            borderRadius: 0,
            width: "35%",
            fontFamily: "Montserrat",
            fontSize: "13px",
            fontWeight: 600,
            height: "40px",
            top: "17vh",
          }}
          onClick={handleEnterMainPage}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
