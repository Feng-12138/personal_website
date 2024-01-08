import "@fontsource/montserrat";
require("typeface-eb-garamond");

export const RelatedCourses = () => {
  const list_courses = {
    "CS446 Software Design and Architectures: 89%":
      "https://uwflow.com/course/cs446",
    "CS486 Introduction to Artificial Intelligence: 87%":
      "https://uwflow.com/course/cs486",
    "CS348 Database Management: 99%": "https://uwflow.com/course/cs348",
    "CS370 Numerical Computation 93%": "https://uwflow.com/course/cs370",
    "CS349 User Interfaces 91%": "https://uwflow.com/course/cs349",
    "CS341 Algorithms: 86%": "https://uwflow.com/course/cs341",
    "CS350 Operating System: 84%": "https://uwflow.com/course/cs350",
    "CS 251 Computer Organization and Design: 93%":
      "https://uwflow.com/course/cs251",
    "CS 241 Foundations of Sequential Programs: 93%":
      "https://uwflow.com/course/cs241",
    "CS 246 Object-Oriented Software Development: 92%":
      "https://uwflow.com/course/cs246",
    "CS 245 Logic and Computation 92%": "https://uwflow.com/course/cs245",
    "CS 240 Data Structures and Data Management: 82%":
      "https://uwflow.com/course/cs240",
    "CS136 Elementary Algorithm Design and Data Abstraction: 100%":
      "https://uwflow.com/course/cs136",
    "CO 250 Introduction to Optimization: 94%":
      "https://uwflow.com/course/co250",
    "MATH 235 Linear Algebra for Honours Mathematics: 96%":
      "https://uwflow.com/course/math235",
    "MATH 237 Calculus 3 for Honours Mathematics: 95%":
      "https://uwflow.com/course/math237",
    "MATH 239 Introduction to Combinatorics: 89%":
      "https://uwflow.com/course/math239",
    "ACTSC 231 Introductory Financial Mathematics: 95%":
      "https://uwflow.com/course/actsc231",
  };

  let idx = 0;

  let arrCourseLeft: string[] = [];
  let arrCourseRight: string[] = [];

  for (const course in list_courses) {
    if (idx % 2) {
      arrCourseRight.push(course);
    } else {
      arrCourseLeft.push(course);
    }
    idx++;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: -40,
        paddingBottom: 60,
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "left",
          fontFamily: "montserrat",
          fontSize: 18,
          flexDirection: "column",
        }}
      >
        {arrCourseLeft.map((el, idx) => {
          return (
            <div key={idx} style={{ marginBottom: 30 }}>
              <a href={list_courses[el as keyof typeof list_courses]}>{el}</a>
            </div>
          );
        })}
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "left",
          fontFamily: "montserrat",
          fontSize: 18,
          flexDirection: "column",
        }}
      >
        {arrCourseRight.map((el, idx) => {
          return (
            <div key={idx} style={{ marginBottom: 30 }}>
              <a href={list_courses[el as keyof typeof list_courses]}>{el}</a>
            </div>
          );
        })}
      </span>
    </div>
  );
};
