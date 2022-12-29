function solve(num, oper, num2) {
  switch (oper) {
    case "+":
      console.log(Number(num + num2).toFixed(2));
      break;
    case "-":
      console.log(Number(num - num2).toFixed(2));
      break;
    case "/":
      console.log(Number(num / num2).toFixed(2));
      break;
    case "*":
      console.log(Number(num * num2).toFixed(2));
      break;
  }
}
