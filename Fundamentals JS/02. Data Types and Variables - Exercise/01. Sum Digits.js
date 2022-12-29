function solve(n) {
  let sum = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
  console.log(sum);
}
