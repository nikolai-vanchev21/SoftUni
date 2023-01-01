function diagonalAttack(arr) {
  let matrix = arr.map((el) => el.split(" ").map(Number));
  let sum1 = 0;
  let sum2 = 0;
  let reserved1 = [];
  let reserved2 = [];
  let k = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum1 += matrix[i][i];
  }
  for (let j = matrix.length - 1; j >= 0; j--) {
    sum2 += matrix[j][k];
    k++;
  }

  if (sum1 === sum2) {
    for (let i = 0; i < matrix.length; i++)
      for (let j = 0; j < matrix.length; j++) {
        if (i != j && i != matrix.length - 1 - j) {
          matrix[i][j] = sum1;
        }
      }
  }
  matrix.forEach((element) => {
    console.log(element.join(" "));
  });
}
