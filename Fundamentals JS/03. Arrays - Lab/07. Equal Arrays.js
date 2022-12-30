function solve(arr1, arr2) {
  let bool = "true";
  let index;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + Number(arr1[i]);

    if (Number(arr1[i]) !== Number(arr2[i])) {
      index = i;
      bool = "false";
      break;
    }
  }
  if (bool === "true") {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else
    console.log(`Arrays are not identical. Found difference at ${index} index`);
}
