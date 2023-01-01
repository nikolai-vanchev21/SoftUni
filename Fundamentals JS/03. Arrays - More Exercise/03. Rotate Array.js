function rotateArray(arr) {
  const rotations = arr.pop();

  for (let i = 0; i <= rotations - 1; i++) {
    let el = arr.pop();
    arr.unshift(el);
  }
  console.log(arr.join(" "));
}
