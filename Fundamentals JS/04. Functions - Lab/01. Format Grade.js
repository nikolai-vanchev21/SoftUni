function formatGrade(grade) {
  switch (true) {
    case grade < 3.0:
      console.log(`Fail (2)`);
      break;
    case grade >= 3.0 && grade < 3.5:
      console.log(`Poor (${grade.toFixed(2)})`);
      break;
    case grade >= 3.5 && grade < 4.5:
      console.log(`Good (${grade.toFixed(2)})`);
      break;
    case grade >= 4.5 && grade < 5.5:
      console.log(`Very good (${grade.toFixed(2)})`);
      break;
    case grade >= 5.5:
      console.log(`Excellent (${grade.toFixed(2)})`);
      break;
  }
}
