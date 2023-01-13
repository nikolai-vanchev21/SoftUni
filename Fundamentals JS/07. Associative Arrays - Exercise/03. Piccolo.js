function piccolo(input) {
  let parking = {};
  for (line of input) {
    let direction = line.split(", ")[0];
    let carNumber = line.split(", ")[1];
    if (direction == "IN") parking[carNumber] = carNumber;
    if (direction == "OUT") delete parking[carNumber];
  }

  if (Object.keys(parking).length === 0) console.log("Parking Lot is Empty");
  else {
    let parkingEntries = Object.entries(parking);
    parkingEntries.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [car, carNumber] of parkingEntries) {
      console.log(car);
    }
  }
}
