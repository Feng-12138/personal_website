import "@fontsource/montserrat";
require("typeface-eb-garamond");
import { Button } from "@mui/material";

export const GPAAndTranscript = () => {
  return (
    <div
      style={{
        marginTop: 50,
        marginLeft: "6.2%",
        marginRight: "6%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "EB Garamond",
          marginLeft: "6.875rem",
          fontSize: 24,
        }}
      >
        CGPA: 92.84 / 100
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
          marginLeft: "15%",
        }}
      >
        <a
          href="/NewTranscript.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          Transcript
        </a>
      </Button>
    </div>
  );
};
