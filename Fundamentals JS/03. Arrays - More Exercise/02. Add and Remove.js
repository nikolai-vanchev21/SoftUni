function addAndRemove(arr) {
  let num = 1;
  let arr1 = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === "add") arr1.push(num);
    if (arr[i] === "remove") arr1.pop();
    num++;
  }
  if (arr1.length === 0) console.log("Empty");
  else console.log(arr1.join(" "));
}
