function solve(arr1, arr2) {
  const mergedArr = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    let sum = 0;
    if (i % 2 === 0) {
      sum += Number(arr1[i]) + Number(arr2[i]);
      mergedArr.splice(i, 0, sum);
    }
    if (i % 2 != 0) {
      mergedArr.splice(i, 0, arr1[i].concat(arr2[i]));
    }
  }
  console.log(mergedArr.join(" - "));
}
