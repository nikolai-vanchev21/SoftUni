function solve(num) {
  let nums = [2, 3, 6, 7, 10];
  let num1 = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (num % nums[i] == 0) {
      num1 = nums[i];
    }
  }
  if (num1 > 0) {
    console.log(`The number is divisible by ${num1}`);
  } else {
    console.log("Not divisible");
  }
}
