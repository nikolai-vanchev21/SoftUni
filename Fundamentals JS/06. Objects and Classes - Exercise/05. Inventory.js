function inventory(arr) {
  let result = [];
  class Hero {
    constructor(name, level, items) {
      this.name = name;
      this.level = level;
      this.items = items;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const info = arr[i].split("/");

    let name = info[0].trim();
    let level = Number(info[1]);
    let items = info[2].split(",");
    let p = new Hero(name, level, items);

    result.push(p);
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++)
      if (result[i].level > result[j].level) {
        let temp = result[i].level;
        let temp1 = result[i].name;
        let temp2 = result[i].items;
        result[i].level = result[j].level;
        result[i].name = result[j].name;
        result[i].items = result[j].items;
        result[j].level = temp;
        result[j].name = temp1;
        result[j].items = temp2;
      }
  }
  result.forEach((element) => {
    console.log(`Hero: ${element.name}`);
    console.log(`level => ${element.level}`);
    console.log(`items =>${element.items.join(",")}`);
  });
}
