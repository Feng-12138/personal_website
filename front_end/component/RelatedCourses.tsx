import "@fontsource/montserrat";
require("typeface-eb-garamond");

export const RelatedCourses = () => {
  const list_courses = {
    "CS348 Database Management: 99%": "https://uwflow.com/course/cs348",
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

  let arrCourse = [] as Array<Array<string>>;
  let idx = 0;

  for (const course in list_courses) {
    let curCoursePair = [] as Array<string>;
    curCoursePair.push(course);
    if (idx % 2 == 0) {
      arrCourse.push(curCoursePair);
    } else {
      arrCourse[arrCourse.length - 1].push(course);
    }
    idx++;
  }

  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        display: "flex",
        fontFamily: "montserrat",
        fontSize: 18,
        flexWrap: "wrap",
        marginTop: -40,
      }}
    >
      {arrCourse.map((el, idx) => {
        return (
          <div
            key={idx}
            style={{
              marginTop: 15,
              marginBottom: 15,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>
              <a href={list_courses[el[0] as keyof typeof list_courses]}>
                {el[0]}
              </a>
            </span>
            {el.length == 2 ? (
              <span>
                <a href={list_courses[el[1] as keyof typeof list_courses]}>
                  {el[1]}
                </a>
              </span>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};
