function minerTask(input) {
  let miner = {};
  for (let i = 0; i < input.length; i += 2) {
    miner[input[i]] = input[i + 1];
  }
  for (const key in miner) {
    console.log(`${key} -> ${miner[key]}`);
  }
}
