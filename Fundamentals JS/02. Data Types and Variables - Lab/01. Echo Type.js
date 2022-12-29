function solve(n) {
  if (typeof n == "number" || typeof n == "string") {
    console.log(typeof n);
    console.log(n);
  } else {
    console.log(typeof n);
    console.log("Parameter is not suitable for printing");
  }
}
