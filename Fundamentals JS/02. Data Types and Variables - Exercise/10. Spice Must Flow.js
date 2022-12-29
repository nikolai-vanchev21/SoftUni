function solve(startingYield) {
  let br = 0;
  let totalSpice = 0;
  while (startingYield >= 100) {
    totalSpice += startingYield;

    startingYield -= 10;
    br++;
    totalSpice = totalSpice - 26;
  }

  if (startingYield < 100 && totalSpice >= 26) totalSpice -= 26;
  if (startingYield < 100 && totalSpice < 26) totalSpice = 0;
  console.log(br);
  console.log(totalSpice);
}
