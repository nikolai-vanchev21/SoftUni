function solve(nums) {
  let sum = 0;
  let sum1 = 0;
  arr = nums.map(function (element, index) {
    if (element % 2 === 0) {
      element = element + index;
    } else {
      element = element - index;
    }
    return element;
  });
  console.log(arr);
  nums.forEach((el) => (sum += el));
  arr.forEach((el) => (sum1 += el));

  console.log(sum);
  console.log(sum1);
}
