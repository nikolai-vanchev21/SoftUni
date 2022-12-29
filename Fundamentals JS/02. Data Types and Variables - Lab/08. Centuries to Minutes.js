function solve(century) {
  console.log(
    `${century} centuries = ${century * 100} years = ${Math.floor(
      century * 100 * 365.2422
    )} days = ${Math.floor(century * 100 * 365.2422) * 24} hours = ${
      Math.floor(century * 100 * 365.2422) * 24 * 60
    } minutes`
  );
}
