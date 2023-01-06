function firstAndLastKNumbers(arr) {
  let first = [];
  let second = [];
  first = arr.slice(1, arr[0] + 1);
  second = arr.slice(-arr[0]);
  console.log(first.join(" "));
  console.log(second.join(" "));
}
