function solve(a, b, c) {
  let str = "";
  for (let i = arguments.length - 1; i >= 0; i--) str += arguments[i] + " ";
  console.log(str.trimEnd());
}
