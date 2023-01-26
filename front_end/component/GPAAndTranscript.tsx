import "@fontsource/montserrat";
require("typeface-eb-garamond");
import { Button } from "@mui/material";
import Link from "next/link";
export const GPAAndTranscript = () => {
  return (
    <div
      style={{
        marginTop: 50,
        marginLeft: "6%",
        marginRight: "6%",
        display: "flex",
      }}
    >
      <span
        style={{
          fontFamily: "EB Garamond",
          marginLeft: "6.875rem",
          fontSize: 24,
        }}
      >
        CGPA: 93.25 / 100
      </span>
      <Button
        style={{
          borderRadius: 0,
          color: "#80774f",
          fontFamily: "montserrat",
          fontWeight: 500,
          letterSpacing: 2,
        }}
      >
        <Link href="/SSR_TSRPT.pdf" target="_blank">
          Download
        </Link>
      </Button>
    </div>
  );
};
