function solve(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let k = i.toString();
    for (let j = 0; j < i.toString().length; j++) {
      sum += Number(k[j]);
    }

    if (sum === 5 || sum === 7 || sum === 11) console.log(`${i} -> True`);
    else console.log(`${i} -> False`);
    sum = 0;
  }
}
