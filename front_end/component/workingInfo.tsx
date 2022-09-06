export default function WorkingInfo(props: { information: object }) {
  const { information } = props as any;
  return (
    <span style={{ marginLeft: 40 }}>
      <div style={{ fontSize: 32 }}>
        <a href={information["link"]} target="_blank" rel="noopener noreferrer">
          {information["name"]}
        </a>
      </div>
      <div
        style={{
          fontSize: 14,
          color: "#9a9a9a",
          fontFamily: "Montserrat",
          letterSpacing: 3,
          marginTop: 7,
        }}
      >
        <div style={{ marginBottom: 3 }}>{information["title"]}</div>
        <div>{information["time"]}</div>
      </div>
    </span>
  );
}
