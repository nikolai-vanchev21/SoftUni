function storage(input) {
  let store = new Map();
  for (let line of input) {
    let [item, quantity] = line.split(" ");
    quantity = +quantity;
    if (store.has(item)) {
      quantity += store.get(item);
    }
    store.set(item, quantity);
  }
  for (let [name, value] of store) {
    console.log(`${name} -> ${value}`);
  }
}
