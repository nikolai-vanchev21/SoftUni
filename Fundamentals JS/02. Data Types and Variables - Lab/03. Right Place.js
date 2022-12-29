function solve(n1, char, n2) {
  if (n1.replace("_", char) === n2) console.log("Matched");
  else console.log("Not Matched");
}
