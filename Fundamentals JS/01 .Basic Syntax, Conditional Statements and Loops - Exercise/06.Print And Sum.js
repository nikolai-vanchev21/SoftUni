function solve(start, end) {
  let sum = 0;
  let arr = [];
  for (start; start <= end; start++) {
    sum += start;
    arr.push(start);
  }
  console.log(...arr);
  console.log(`Sum: ${sum}`);
}
