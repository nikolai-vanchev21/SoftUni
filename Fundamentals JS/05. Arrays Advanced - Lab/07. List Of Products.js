function listOfProducts(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].charCodeAt(0) > arr[j].charCodeAt(0)) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  arr.forEach((element, index) => {
    console.log(`${index + 1}.${element}`);
  });
}
