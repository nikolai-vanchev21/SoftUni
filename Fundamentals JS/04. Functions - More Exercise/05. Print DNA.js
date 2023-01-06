function printDNA(num) {
  const chain = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
  for (let i = 1; i <= num; i++) {
    let [a, b] = chain.splice(0, 2);

    if (i == 1 || i % 4 == 1) {
      console.log(`**${a}${b}**`);
    } else if (i == 2 || i % 4 == 2) {
      console.log(`*${a}--${b}*`);
    } else if (i == 3 || i % 4 == 3) {
      console.log(`${a}----${b}`);
    } else if (i == 4 || i % 4 == 0) {
      console.log(`*${a}--${b}*`);
    }
    chain.push(a);
    chain.push(b);
  }
}
