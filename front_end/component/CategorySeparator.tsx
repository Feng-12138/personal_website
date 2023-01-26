export const CategorySeparator = (props: { name: string }) => {
  const { name } = props;
  return (
    <div
      style={{
        marginLeft: "6%",
        marginTop: "5%",
        alignItems: "center",
        marginBottom: "5%",
        display: "flex",
      }}
    >
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
        {name}: &nbsp;
      </div>
    </div>
  );
};
