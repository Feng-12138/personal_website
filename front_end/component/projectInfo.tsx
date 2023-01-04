export const ProjectInfo = (props: {
  projectInfo: object;
  windowWidth: number;
}) => {
  const { projectInfo, windowWidth } = props as any;
  const handleMouseOnButton = (el: any, color: string, maxWidth: string) => {
    if (el.target.innerHTML == "Check Details") {
      el.target = el.target.parentElement;
    }
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
    if (el.target.innerHTML == "Check Details") {
      el.target = el.target.parentElement;
    }
    el.target.style.borderBottomColor = color;
    el.target.style.maxWidth = originalWidth;
    el.target.style.lineHeight = "12%";
    el.target.style.paddingBottom = "";
    el.target.style.borderBottomWidth = "0.5rem";
  };

  return (
    <span
      style={{
        backgroundColor: "#f5f5f5",
        paddingTop: 20,
        paddingBottom: 20,
        width: "30%",
        height: (1440 / windowWidth) * 300 + 50,
        maxHeight: 350,
      }}
    >
      <div
        style={{
          fontSize: 32,
          fontFamily: "EB Garamond",
          fontWeight: 600,
          width: "100%",
          textAlign: "center",
          paddingLeft: 75,
          paddingRight: 75,
        }}
      >
        {projectInfo.name}
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          fontSize: 13,
          textAlign: "left",
          paddingLeft: 40,
          paddingRight: 40,
          marginTop: 20,
          lineHeight: 1.4,
        }}
      >
        {projectInfo.description}
      </div>
      <div
        style={{
          fontFamily: "Montserrat",
          fontSize: 13,
          textAlign: "left",
          paddingLeft: 40,
          paddingRight: 40,
          marginTop: 20,
          lineHeight: 1.4,
        }}
      >
        {projectInfo.description2}
      </div>
      <div
        style={{
          fontSize: 13,
          fontFamily: "Montserrat",
          textTransform: "uppercase",
          fontStyle: "normal",
          marginTop: 50,
          marginLeft: "60%",
          lineHeight: "12%",
          borderBottomColor: "rgb(251, 235, 79)",
          borderBottomWidth: "7px",
          borderBottomStyle: "solid",
          maxWidth: 70,
          whiteSpace: "nowrap",
          marginBottom: 10,
          position: "sticky",
        }}
        onMouseEnter={(el) =>
          handleMouseOnButton(el, "rgb(251, 235, 79)", "105.82px")
        }
        onMouseLeave={(el) =>
          handleMouseLeaveButton(el, "rgb(251, 235, 79)", "70px")
        }
      >
        <a href={projectInfo.href} target="_blank" rel="noopener noreferrer">
          Check Details
        </a>
      </div>
    </span>
  );
};
