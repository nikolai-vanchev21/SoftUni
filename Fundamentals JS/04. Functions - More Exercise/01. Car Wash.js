function carWash(arr) {
  let value = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    switch (arr[i]) {
      case "soap":
        value += 10;
        break;
      case "water":
        value += value * 0.2;
        break;
      case "vacuum cleaner":
        value += value * 0.25;
        break;
      case "mud":
        value -= value * 0.1;
        break;
    }
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);
}
