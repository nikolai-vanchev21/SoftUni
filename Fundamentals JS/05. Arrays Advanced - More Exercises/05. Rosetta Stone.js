function rosettaStone(input) {
  let n = Number(input.shift()); // Get size of code

  // Initialize code matrix
  let code = [];
  for (let i = 0; i < n; i++) {
    code.push(input.shift().split(" ").map(Number));
  }

  // Initialize message matrix
  let matrix = [];
  for (let row of input) {
    matrix.push(row.split(" ").map(Number));
  }

  // Initialize decoded message
  let result = "";

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let current = matrix[row][col];
      let modifier = code[row % code.length][col % code[0].length];
      result += String.fromCharCode(((current + modifier) % 27) + 64);
    }
  }

  result = result.replace(/@/g, " ");
  console.log(result);
}
