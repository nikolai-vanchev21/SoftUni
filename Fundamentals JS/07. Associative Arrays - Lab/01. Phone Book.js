function phoneBook(input) {
  let phoneB = {};
  for (const entry of input) {
    let [name, phone] = entry.split(" ");
    phoneB[name] = phone;
  }
  for (const key in phoneB) {
    console.log(`${key} -> ${phoneB[key]}`);
  }
}
