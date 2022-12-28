function solve(arr) {
  for (let i = 1; i <= 4; i++) {
    if (arr[i] === arr[0].split("").reverse().join("")) {
      console.log(`User ${arr[0]} logged in.`);
      return;
    }
    if (i == 4) {
      console.log(`User ${arr[0]} blocked!`);
      return;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
