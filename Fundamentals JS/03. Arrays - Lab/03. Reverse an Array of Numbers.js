function solve(n, arr) {
  let str = "";
  let arr1 = [];
  for (let i = 0; i < n; i++) arr1.push(arr[i]);

  for (let j = arr1.length - 1; j >= 0; j--) str += arr1[j] + " ";
  console.log(str.trimEnd());
}
