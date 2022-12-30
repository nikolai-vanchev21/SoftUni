function solve(arr) {
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    str += arr[i] + " ";
  }
  console.log(str.trimEnd());
}
