function travelTime(input) {
  let destinations = {};
  for (const line of input) {
    let country = line.split(" > ")[0];
    let town = line.split(" > ")[1];
    let cost = line.split(" > ")[2];
    if (destinations[country]) {
      if (destinations[country][town]) {
        if (destinations[country][town] > cost)
          destinations[country][town] = cost;
      } else destinations[country][town] = cost;
    }
    if (!destinations[country]) destinations[country] = { [town]: cost };
  }
  let sortedCountries = Object.keys(destinations).sort((a, b) =>
    a.localeCompare(b)
  );
  for (let country of sortedCountries) {
    // Минаваме по държаните от сортираните
    let output = ""; // Създаваме променлива за отпечатването
    output += country + " -> "; // Към отпечатването добавяме държавата

    let sortedTownsByPrice = Object.keys(destinations[country]).sort(
      (t1, t2) => destinations[country][t1] - destinations[country][t2]
    );
    // Сортираме градовете в държавата по цена

    for (let town of sortedTownsByPrice) {
      // Минаваме по градовете в сортираните
      output += town + " -> "; // Към отпечатването добавяме града
      output += destinations[country][town] + " "; // Към отпечатването добавяме и цената
    }

    console.log(output); // Накрая печатаме събраното за държавата и след почваме наново за следващата държава
  }
}
