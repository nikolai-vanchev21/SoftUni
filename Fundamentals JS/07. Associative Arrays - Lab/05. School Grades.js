function schoolGrades(input) {
  let students = {};
  for (let line of input) {
    let studentArr = line.split(" ");
    let name = studentArr.shift();
    let grades = studentArr.map((x) => Number(x));

    if (!students[name]) {
      students[name] = [];
    }

    students[name] = students[name].concat(grades);
  }
  let studentsEntries = Object.entries(students);
  let sortedStudents = studentsEntries.sort((a, b) => a[0].localeCompare(b[0]));
  for (const [name, grades] of sortedStudents) {
    let sum = 0;
    for (const grade of grades) {
      sum += grade;
    }
    sum = (sum / grades.length).toFixed(2);

    console.log(`${name}: ${sum}`);
  }
}
