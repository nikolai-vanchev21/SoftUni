function adressBook(input) {
  let book = {};
  for (let line of input) {
    let [name, address] = line.split(":");
    book[name] = address;
  }
  let bookEntries = Object.entries(book);
  bookEntries.sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  for (let [name, address] of bookEntries) {
    console.log(`${name} -> ${address}`);
  }
}
