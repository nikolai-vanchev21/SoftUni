function signCheck(numOne, numTwo, numThree) {
  let brNegative = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] == 0 || arguments[i] < 0) brNegative++;
  }
  if (brNegative == 1 || brNegative == 3) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}
