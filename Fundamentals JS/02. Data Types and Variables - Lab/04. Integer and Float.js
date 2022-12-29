function solve(n1, n2, n3) {
  const sum = n1 + n2 + n3;
  if (sum.toString().includes(".")) console.log(`${sum} - Float`);
  else console.log(`${sum} - Integer`);
}
