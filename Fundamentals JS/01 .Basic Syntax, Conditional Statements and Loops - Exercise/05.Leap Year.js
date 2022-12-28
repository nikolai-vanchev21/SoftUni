function solve(year) {
  let leap = "";
  if (year % 4 === 0 && year % 100 != 0) {
    leap = "yes";
  } else {
    leap = "no";
  }
  if (year % 400 === 0) {
    leap = "yes";
  }
  console.log(leap);
}
