import styles from "./mainBody.module.css";

export const ListText = (props: { text: string; windowWidth: number }) => {
  const { text, windowWidth } = props;
  return (
    <div
      style={{
        paddingLeft: windowWidth >= 1580 ? 150 : 50,
        marginTop: 30,
        alignContent: "top",
        marginBottom: 30,
      }}
    >
      <span
        style={{
          marginRight: 18,
          marginLeft: -30,
          fontSize: 21,
          fontWeight: "bold",
        }}
      >
        {" "}
        ࠰{" "}
      </span>
      <span className={styles.listFontStyle}>{text}</span>
    </div>
  );
};
