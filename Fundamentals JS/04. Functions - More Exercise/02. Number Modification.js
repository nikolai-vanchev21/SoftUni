function numberModification(num) {
  let str = String(num);
  let sum = 0;
  let averageSum = 0;

  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
  averageSum = sum / str.length;

  while (averageSum <= 5) {
    str = str + "9";
    sum += 9;
    averageSum = sum / str.length;
  }
  console.log(Number(str));
}
