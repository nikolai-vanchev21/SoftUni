function solve(arr) {
  const arr1 = arr.map((x) => Number(x));
  let sum = 0;
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] % 2 === 0) sum += arr1[i];
  }
  console.log(sum);
}
