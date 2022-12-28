function solve(num1, num2, num3) {
  const arr = [num1, num2, num3];

  let i = 0,
    j;

  while (i < arr.length) {
    j = i + 1;
    while (j < arr.length) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
    i++;
  }
  for (let k = 0; k < arr.length; k++) console.log(arr[k]);
}
