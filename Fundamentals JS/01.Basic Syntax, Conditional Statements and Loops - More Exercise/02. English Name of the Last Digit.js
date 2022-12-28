function solve(num) {
  str = `${num}`;
  lastDigit = str.charAt(str.length - 1);
  if (+lastDigit === 0) console.log("zero");
  if (+lastDigit === 1) console.log("one");
  if (+lastDigit === 2) console.log("two");
  if (+lastDigit === 3) console.log("three");
  if (+lastDigit === 4) console.log("four");
  if (+lastDigit === 5) console.log("five");
  if (+lastDigit === 6) console.log("six");
  if (+lastDigit === 7) console.log("seven");
  if (+lastDigit === 8) console.log("eight");
  if (+lastDigit === 9) {
    console.log("nine");
  }
}
