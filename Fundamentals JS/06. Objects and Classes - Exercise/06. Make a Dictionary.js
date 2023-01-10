function dictionary(arr) {
  let dict = {};
  for (let el of arr) {
    let obj = JSON.parse(el);
    dict = Object.assign(dict, obj);
  }
  let sortedKeys = Object.keys(dict);
  sortedKeys.sort((a, b) => a.localeCompare(b));

  for (let term of sortedKeys) {
    let definition = dict[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}
