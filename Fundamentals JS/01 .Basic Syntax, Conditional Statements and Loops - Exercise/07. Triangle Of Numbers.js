function generatePyramid(n) {
  let output = "";
  let k = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      output += k + " ";
    }
    console.log(output);
    output = "";
    k++;
  }
}
