function oddOccurences(str) {
  let tracker = {};
  const tracked = str.split(" ").map((word) => word.toLowerCase());

  for (const track of tracked) {
    tracker[track] = 0;
    for (const word of tracked) {
      if (track === word) tracker[track]++;
    }
  }

  let res = [];
  for (const key in tracker) {
    if (tracker[key] % 2 != 0) res.push(key);
  }
  console.log(res.join(" "));
}
