function maxNumber(array) {
  let newArray = [];
  while (array.length > 0) {
    let current = array.shift();
    let biggest = Math.max(...array);

    if (current > biggest) {
      newArray.push(current);
    }
  }
  console.log(newArray.join(" "));
}
