function NegativeOrPositiveNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) newArr.unshift(arr[i]);
    else newArr.push(arr[i]);
  }
  newArr.forEach((element) => {
    console.log(element);
  });
}
