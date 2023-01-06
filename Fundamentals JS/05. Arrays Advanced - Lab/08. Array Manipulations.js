function arrayManipulations(arr) {
  const arr1 = arr.shift().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("Add")) {
      arr1.push(arr[i].split(" ")[1]);
    }
    if (arr[i].split(" ")[0] == "Remove") {
      let num = arr[i].split(" ")[1];
      for (let k = 0; k < arr1.length; k++) {
        if (arr1[k] == num) arr1.splice(k, 1);
      }
    }
    if (arr[i].includes("RemoveAt")) {
      arr1.splice(arr[i].slice(-1), 1);
    }
    if (arr[i].includes("Insert")) {
      arr1.splice(arr[i].split(" ")[2], 0, arr[i].split(" ")[1]);
    }
  }
  console.log(arr1.join(" "));
}
