import { CategorySeparator } from "./CategorySeparator";

export const ProjectComponent = (props: {
  name: string;
  description: Array<string>;
  date: string;
  gitHubLink?: string;
}) => {
  const { name, description, date, gitHubLink } = props;
  return (
    <div style={{ marginTop: -30 }}>
      <div>
        {gitHubLink ? (
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <div
              style={{
                display: "flex",
                marginRight: "10%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CategorySeparator name={name} />
              <span style={{ fontFamily: "EB Garamond", fontSize: "1.3rem" }}>
                {date}{" "}
              </span>
            </div>
          </a>
        ) : (
          <div
            style={{
              display: "flex",
              marginRight: "10%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CategorySeparator name={name} />
            <span style={{ fontFamily: "EB Garamond", fontSize: "1.3rem" }}>
              {date}{" "}
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginLeft: "8.5%",
              marginRight: "10%",
              display: "flex",
              fontFamily: "montserrat",
              fontSize: 17,
              flexDirection: "column",
              marginTop: -30,
              maxWidth: "70%",
            }}
          >
            {description.map((el, idx) => {
              return (
                <div key={idx} style={{ marginBottom: 23, lineHeight: 1.3 }}>
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
