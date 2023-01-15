function softuniStudents(input) {
  let listOfCourses = {};

  for (let line of input) {
    if (!line.includes(`[`)) {
      let [courseName, capacity] = line.split(`: `);
      if (!listOfCourses.hasOwnProperty(courseName)) {
        listOfCourses[courseName] = {
          capacity: Number(capacity),
          students: [],
        };
      } else {
        listOfCourses[courseName].capacity += Number(capacity);
      }
    } else if (line.includes(`with email`)) {
      line = line.split(`[`);
      let userName = line.shift();
      line = line[0].split(`]`);
      let creditCount = Number(line.shift());
      let temp = line[0].split(` `);
      let email = temp[3];
      let courseName = line[0].split(` joins `)[1];
      if (
        listOfCourses.hasOwnProperty(courseName) &&
        listOfCourses[courseName].capacity > 0
      ) {
        listOfCourses[courseName].students.push({
          userName: userName,
          creditCount: creditCount,
          email: email,
        });
        listOfCourses[courseName].capacity--;
      }
    }
  }

  let sortedByCapacity = Object.entries(listOfCourses).sort(
    (a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
  );

  for (let element of sortedByCapacity) {
    console.log(`${element[0]}: ${element[1].capacity} places left`);
    element[1].students
      .sort((a, b) => b.creditCount - a.creditCount)
      .forEach((x) =>
        console.log(`--- ${x.creditCount}: ${x.userName}, ${x.email}`)
      );
  }
}
