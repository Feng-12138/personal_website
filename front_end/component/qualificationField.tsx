import CPlusPlus from "../images/icons8-c++-150.png";
import css from "../images/icons8-css3-150.png";
import python from "../images/icons8-python-150.png";
import sql from "../images/icons8-sql-100.png";
import golang from "../images/icons8-golang-150.png";
import typeScript from "../images/icons8-typescript-150.png";
import javaScript from "../images/icons8-javascript-150.png";
import react from "../images/icons8-react-native-150.png";
import nodeJs from "../images/nodejs-icon.svg";
import flask from "../images/icons8-flask-150.png";
import PostgreSQL from "../images/icons8-postgresql-150.png";
import MySQL from "../images/icons8-mysql-logo-150.png";
import MongoDB from "../images/mongodb-ar21.svg";

export const QualificationField = (props: { fieldName: string }) => {
  const { fieldName } = props;
  if (fieldName == "Languages") {
    return (
      <div
        style={{
          marginLeft: "6%",
          marginTop: "7%",
          alignItems: "center",
          marginBottom: "7%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              maxWidth: "5rem",
              minWidth: "5rem",
              minHeight: 8,
              backgroundColor: "rgb(251, 235, 79)",
              marginRight: 30,
              maxHeight: 8,
            }}
          ></div>
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "EB Garamond",
              fontWeight: 400,
            }}
          >
            {fieldName}: &nbsp;
          </div>
        </div>
        <div style={{ marginTop: 50, marginLeft: 110 }}>
          <div>
            <a
              href={"https://en.wikipedia.org/wiki/C%2B%2B"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={CPlusPlus.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 60,
                }}
                alt="C++"
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={
                "https://en.wikipedia.org/wiki/Python_(programming_language)"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={python.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/Go_(programming_language)"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={golang.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/TypeScript"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={typeScript.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/JavaScript"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={javaScript.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/CSS"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={css.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/SQL"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={sql.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="85"
                height="85"
              ></img>
            </a>
          </div>
          <div
            style={{
              marginLeft: 13,
              fontFamily: "montserrat",
              marginTop: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <a
              href={"https://en.wikipedia.org/wiki/C_(programming_language)"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <span
                style={{
                  fontSize: "4.375rem",
                  marginRight: 75,
                }}
              >
                C
              </span>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginRight: 70,
                }}
              >
                Bash Script
              </span>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/Assembly_language"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginRight: 70,
                }}
              >
                Assembly Lang
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  } else if (fieldName == "Frameworks & Databases") {
    return (
      <div
        style={{
          marginLeft: "6%",
          alignItems: "center",
          marginBottom: "7%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              maxWidth: "5rem",
              minWidth: "5rem",
              minHeight: 8,
              backgroundColor: "rgb(251, 235, 79)",
              marginRight: 30,
              maxHeight: 8,
            }}
          ></div>
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "EB Garamond",
              fontWeight: 400,
            }}
          >
            {fieldName}: &nbsp;
          </div>
        </div>
        <div style={{ marginTop: 50, marginLeft: 110 }}>
          <div>
            <a
              href={"https://en.wikipedia.org/wiki/C%2B%2B"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={react.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 80,
                }}
                alt="Next.js(react)"
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={
                "https://en.wikipedia.org/wiki/Python_(programming_language)"
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={flask.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 70,
                }}
                width="95"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/Go_(programming_language)"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={nodeJs.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 80,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/TypeScript"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={PostgreSQL.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 80,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://en.wikipedia.org/wiki/JavaScript"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={MySQL.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 80,
                }}
                width="85"
                height="85"
              ></img>
            </a>
            <a
              href={"https://www.mongodb.com/"}
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              <img
                src={MongoDB.src}
                style={{
                  filter: "contrast(100%) saturate(200%)",
                  marginRight: 80,
                }}
                width="160"
                height="85"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
