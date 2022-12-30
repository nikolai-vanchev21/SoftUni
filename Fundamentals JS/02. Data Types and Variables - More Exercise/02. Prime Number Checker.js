function solve(number) {
  let isPrime = true;

  if (number === 1) {
    return console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return console.log(`true`);
    } else {
      return console.log(`false`);
    }
  } else {
    return console.log("false");
  }
}
