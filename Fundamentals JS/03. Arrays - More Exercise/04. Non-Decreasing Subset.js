function nonDecreasingSubset(arr) {
  const arr1 = [arr[0]];

  for (let i = 0; i <= arr.length - 1; i++) {
    let biggest = arr[i];
    for (let j = i + 1; j <= arr.length - 1; j++)
      if (arr[j] >= biggest) {
        biggest = arr[j];
        arr1.push(biggest);
      }
    break;
  }

  console.log(arr1.join(" "));
}
