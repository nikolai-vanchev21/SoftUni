function solve(year, month, day) {
  if (day === 30) {
    day = 1;
    month++;
  } else day++;
  if (month > 12) {
    year++;
    month = 1;
  }
  if (year === 1) {
    year = 1901;
  }
  return `${year}-${month}-${day}`;
}
