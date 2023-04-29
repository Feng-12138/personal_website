import { CategorySeparator } from "./CategorySeparator";
import "@fontsource/montserrat";
require("typeface-eb-garamond");

export const CompanyInfo = (props: {
  name: string;
  date: string;
  description: Array<string>;
  logoHref?: any;
  webHref?: string;
}) => {
  const { name, logoHref, date, webHref, description } = props;
  return (
    <div style={{ marginTop: -30 }}>
      <div>
        {webHref ? (
          <a href={webHref} target="_blank" rel="noopener noreferrer">
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
              maxWidth: "50%",
            }}
          >
            {description.map((el, idx) => {
              return (
                <div key={idx} style={{ marginBottom: 30, lineHeight: 1.3 }}>
                  {el}
                </div>
              );
            })}
          </div>
          {logoHref ? (
            <img
              src={logoHref.src}
              width={description.length >= 3 ? 300 : 150}
              height={description.length >= 3 ? 300 : 150}
            ></img>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
