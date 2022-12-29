function solve(n1) {
  const num = n1.toString();
  let sum = 0;
  for (i = 0; i < num.length; i++) sum += Number(num[i]);
  console.log(
    `${num} Amazing? ${sum.toString().includes("9") ? "True" : "False"}`
  );
}
