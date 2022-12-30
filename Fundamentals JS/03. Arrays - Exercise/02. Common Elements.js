function solve(arr, arr1) {
  let small = 0;
  if (arr.length <= arr1.length) small = arr.length;
  else small = arr1.length;

  let sbig = 0;
  if (arr.length >= arr1.length) big = arr.length;
  else big = arr1.length;

  let a;

  let k = 0;
  for (k; k < small; k++) {
    a = arr[k];

    {
      for (let j = 0; j < big; j++) if (a === arr1[j]) console.log(a);
    }
  }
}
