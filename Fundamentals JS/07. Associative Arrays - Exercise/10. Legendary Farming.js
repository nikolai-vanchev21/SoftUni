function legendaryFarming(input) {
  let junk = {};
  let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  let legendaryItem = "";

  input = input.split(" ");

  for (let i = 0; i < input.length; i += 2) {
    let quantity = Number(input[i]);
    let mat;
    if (
      material === "shards" ||
      material === "fragments" ||
      material === "motes"
    ) {
      keyMaterials[material] += quan;
      if (keyMaterials[material] >= 250 && material === "shards") {
        legendaryItem = "Shadowmourne";
        keyMaterials[material] -= 250;
        break;
      } else if (keyMaterials[material] >= 250 && material === "fragments") {
        legendaryItem = "Valanyr";
        keyMaterials[material] -= 250;
        break;
      } else if (keyMaterials[material] >= 250 && material === "motes") {
        legendaryItem = "Dragonwrath";
        keyMaterials[material] -= 250;
        break;
      }
    } else {
      if (!junk.hasOwnProperty(material)) {
        junk[material] = 0;
      }
      junk[material] += quantity;
    }
  }

  console.log(`${legendaryItem} obtained!`);

  let sortedKeyMaterials = Object.entries(keyMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );

  let sortedJunk = Object.entries(junk).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [material, quantity] of sortedKeyMaterials) {
    console.log(`${material}: ${quantity}`);
  }

  for (let [material, quantity] of sortedJunk) {
    console.log(`${material}: ${quantity}`);
  }
}
