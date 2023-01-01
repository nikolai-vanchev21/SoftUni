function printNthElement(arr) {
  const step = Number(arr.pop());
  const arr1 = [];
  for (let i = 0; i <= arr.length - 1; i = i += step) {
    arr1.push(arr[i]);
  }
  console.log(arr1.join(" "));
}
