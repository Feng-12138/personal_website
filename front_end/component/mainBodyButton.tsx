export default function MainBodyButton(props: { page: string }) {
  const { page } = props;
  return (
    <div>
      {page === "qualifications" && <div> Start The Exploraton</div>}
      {page === "education" && <div></div>}
      {page === "working" && <div></div>}
      {page === "projects" && <div></div>}
    </div>
  );
}
